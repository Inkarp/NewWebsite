const express = require('express');
const router = express.Router();
const CareerApplication = require('../models/CareerApplication');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, '../uploads/resumes');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadsDir);
    },
    filename: function (req, file, cb) {
        // Create a unique filename
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, 'resume-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        // Check file type
        const allowedTypes = ['.pdf', '.doc', '.docx'];
        const ext = path.extname(file.originalname).toLowerCase();
        if (allowedTypes.includes(ext)) {
            cb(null, true);
        } else {
            cb(new Error('Only PDF and Word documents are allowed'));
        }
    },
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    }
});

// Error handling middleware for multer
const handleMulterError = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({
                success: false,
                message: 'File size should be less than 5MB'
            });
        }
        return res.status(400).json({
            success: false,
            message: err.message
        });
    }
    next(err);
};

// Create email transporter
const createTransporter = () => {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error('Email credentials not found in environment variables');
        return null;
    }

    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
};

// Verify email transporter
const verifyTransporter = async (transporter) => {
    try {
        await transporter.verify();
        console.log('Email transporter verified successfully');
        return true;
    } catch (error) {
        console.error('Email transporter verification failed:', error);
        return false;
    }
};

// Submit career application
router.post('/submit', upload.single('resume'), handleMulterError, async (req, res) => {
    console.log('Received career application submission');
    console.log('Form data:', req.body);
    console.log('File:', req.file);
    
    try {
        // Validate required fields
        const requiredFields = ['name', 'email', 'phone', 'role', 'location', 'department'];
        const missingFields = requiredFields.filter(field => !req.body[field]);
        
        if (missingFields.length > 0) {
            console.error('Missing required fields:', missingFields);
            return res.status(400).json({ 
                success: false, 
                message: `Missing required fields: ${missingFields.join(', ')}` 
            });
        }

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: 'Resume file is required'
            });
        }

        // Create new application
        const application = new CareerApplication({
            ...req.body,
            resume: req.file.path // Store the file path
        });

        console.log('Saving application to database:', application);

        // Save to database
        await application.save();
        console.log('Application saved successfully');

        // Send emails
        const transporter = createTransporter();
        if (!transporter) {
            console.error('Failed to create email transporter');
            return res.status(500).json({ 
                success: false, 
                message: 'Email service configuration error' 
            });
        }

        const isVerified = await verifyTransporter(transporter);
        if (!isVerified) {
            console.error('Email transporter verification failed');
            return res.status(500).json({ 
                success: false, 
                message: 'Email service verification failed' 
            });
        }

        // Send email to admin with resume attachment
        const adminMailOptions = {
            from: `"Inkarp Recruitment" <${process.env.EMAIL_USER}>`,
            to: 'recruit@inkarp.co.in,info@inkarp.co.in',
            subject: `New Career Application: ${application.role}`,
            html: `
                <h2>New Career Application Received</h2>
                <p><strong>Name:</strong> ${application.name}</p>
                <p><strong>Email:</strong> ${application.email}</p>
                <p><strong>Phone:</strong> ${application.phone}</p>
                <p><strong>Role:</strong> ${application.role}</p>
                <p><strong>Location:</strong> ${application.location}</p>
                <p><strong>Department:</strong> ${application.department}</p>
                ${application.message ? `<p><strong>Additional Message:</strong></p><p>${application.message}</p>` : ''}
            `,
            attachments: [{
                filename: req.file.originalname,
                path: req.file.path
            }]
        };

        // Send email to applicant
        const applicantMailOptions = {
            from: `"Inkarp Recruitment" <${process.env.EMAIL_USER}>`,
            to: application.email,
            subject: 'Thank you for applying to Inkarp',
            html: `
                <h2>Thank you for your application!</h2>
                <p>Dear ${application.name},</p>
                <p>We have received your application for the ${application.role} position at Inkarp.</p>
                <p>Our team will review your application and get back to you soon.</p>
                <p>Best regards,<br>Inkarp Recruitment Team</p>
            `
        };

        // Send both emails
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(applicantMailOptions)
        ]);

        console.log('Emails sent successfully');
        res.status(201).json({ 
            success: true, 
            message: 'Application submitted successfully' 
        });

    } catch (error) {
        console.error('Error in career application submission:', {
            message: error.message,
            stack: error.stack,
            code: error.code,
            name: error.name
        });

        // Handle validation errors
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                message: Object.values(error.errors).map(err => err.message).join(', ')
            });
        }

        // Handle duplicate key errors
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: 'An application with this email already exists'
            });
        }

        // Handle file system errors
        if (error.code === 'ENOENT' || error.code === 'EACCES') {
            return res.status(500).json({
                success: false,
                message: 'Error saving the uploaded file'
            });
        }

        res.status(500).json({ 
            success: false, 
            message: process.env.NODE_ENV === 'development' ? error.message : 'An error occurred while submitting your application'
        });
    }
});

// Get all applications (admin only)
router.get('/applications', async (req, res) => {
    try {
        const applications = await CareerApplication.find()
            .sort({ createdAt: -1 });
        res.json({ success: true, data: applications });
    } catch (error) {
        console.error('Error fetching applications:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Error fetching applications' 
        });
    }
});

module.exports = router; 