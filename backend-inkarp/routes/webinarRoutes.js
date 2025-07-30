const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Create email transporter - Reusing the logic from other routes
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
        console.log('Webinar email transporter verified successfully');
        return true;
    } catch (error) {
        console.error('Webinar email transporter verification failed:', error);
        return false;
    }
};

// Initialize email transporter
const transporter = createTransporter();
if (transporter) {
    verifyTransporter(transporter);
}

// Webinar registration route
router.post('/register', async (req, res) => {
    try {
        console.log('Received Webinar registration form data:', req.body);

        const {
            name,
            email,
            contact,
            companyName,
            department,
            country,
            state,
            city,
            howDidYouHear
        } = req.body;

        // Validate required fields (assuming Name, Email, Contact are essential)
        if (!name || !email || !contact) {
            return res.status(400).json({
                success: false,
                message: 'Name, Email Id, and Contact are required fields.'
            });
        }

        // Send email to admin
        const adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: 'info@inkarp.co.in',
            subject: `New Webinar Registration from ${name}`,
            html: `
                <h2>New Webinar Registration</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Contact:</strong> ${contact}</p>
                <p><strong>Company Name:</strong> ${companyName || 'Not provided'}</p>
                <p><strong>Department:</strong> ${department || 'Not provided'}</p>
                <p><strong>Location:</strong> ${city || ''}, ${state || ''}, ${country || ''}</p>
                <p><strong>How did they hear about us:</strong> ${howDidYouHear || 'Not provided'}</p>
            `
        };

        await transporter.sendMail(adminMailOptions);

        console.log('Webinar registration email sent successfully');
        res.status(200).json({
            success: true,
            message: 'Registration successful! We will send you the webinar details soon.'
        });

    } catch (error) {
        console.error('Error processing Webinar registration:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred during registration. Please try again later.'
        });
    }
});

module.exports = router; 