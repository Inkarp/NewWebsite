const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Create email transporter - Reusing the logic from other routes
const createTransporter = () => {
    if (!process.env.CATALYST_EMAIL_USER || !process.env.CATALYST_EMAIL_PASS) {
        console.error('Catalyst email credentials not found in environment variables');
        return null;
    }
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.CATALYST_EMAIL_USER,
            pass: process.env.CATALYST_EMAIL_PASS
        }
    });
};

// Verify email transporter
const verifyTransporter = async (transporter) => {
    try {
        await transporter.verify();
        console.log('Catalyst email transporter verified successfully');
        return true;
    } catch (error) {
        console.error('Catalyst email transporter verification failed:', error);
        return false;
    }
};

// Initialize email transporter
const transporter = createTransporter();
let isTransporterVerified = false;

// Verify transporter on startup
if (transporter) {
    verifyTransporter(transporter).then(verified => {
        isTransporterVerified = verified;
    });
}

// Catalyst registration route
router.post('/register', async (req, res) => {
    try {
        console.log('Received Catalyst registration form data:', req.body);

        const {
            name,
            designation,
            email,
            department,
            institutionName,
            mobileNumber
        } = req.body;

        // Validate required fields
        if (!name || !email || !institutionName) {
            return res.status(400).json({
                success: false,
                message: 'Name, Email, and Institution Name are required fields.'
            });
        }

        // Check if transporter is available and verified
        if (!transporter) {
            console.error('Email transporter not initialized');
            return res.status(500).json({
                success: false,
                message: 'Email service is not configured properly. Please contact support.'
            });
        }

        if (!isTransporterVerified) {
            console.error('Email transporter not verified');
            return res.status(500).json({
                success: false,
                message: 'Email service is not ready. Please try again in a few moments.'
            });
        }

        // Send email to admin
        const adminMailOptions = {
            from: `"${name}" <inkarpinstruments12@gmail.com>`,
            to: [process.env.CATALYST_EMAIL_USER, 'info@inkarp.co.in'],
            subject: `New CATALYSTCUE Registration from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ccc;">
                    <div style="background: #b80000; color: #fff; padding: 10px 0; text-align: center; font-size: 18px; font-weight: bold;">
                        CATALYSTCue Physical Copy
                    </div>
                    <div style="border-bottom: 4px solid #b80000;"></div>
                    <div style="padding: 32px 24px 24px 24px; background: #fff;">
                        <table style="width: 100%; font-size: 1rem; color: #222;">
                            <tr>
                                <td style="font-weight: bold; width: 120px; padding: 6px 0;">Name :</td>
                                <td>${name}</td>
                            </tr>
                            <tr>
                                <td style="font-weight: bold; padding: 6px 0;">E-mail :</td>
                                <td><a href="mailto:${email}" style="color: #0066cc; text-decoration: underline;">${email}</a></td>
                            </tr>
                            <tr>
                                <td style="font-weight: bold; padding: 6px 0;">Designation :</td>
                                <td>${designation || 'Not provided'}</td>
                            </tr>
                            <tr>
                                <td style="font-weight: bold; padding: 6px 0;">Department :</td>
                                <td>${department || 'Not provided'}</td>
                            </tr>
                            <tr>
                                <td style="font-weight: 700; padding: 2px 0; width: 150px;">Institution Name :</td>
                                <td>${institutionName}</td>
                            </tr>
                            <tr>
                                <td style="font-weight: 600; padding: 2px 0; width: 150px;">Mobile Number :</td>
                                <td>${mobileNumber}</td>
                            </tr>
                        </table>
                    </div>
                    <div style="background: #b80000; color: #fff; padding: 10px 0; text-align: center; font-size: 0.8rem;">
                        &copy; Copyright 2020 Inkarp. All rights reserved by Inkarp Powered by <a href="#" style="color: #ADD8E6; text-decoration: underline;">MBW</a>.
                    </div>
                </div>
            `
        };

        try {
            await transporter.sendMail(adminMailOptions);
            console.log('Catalyst registration email sent successfully');
        } catch (emailError) {
            console.error('Error sending Catalyst registration email:', {
                error: emailError.message,
                code: emailError.code,
                stack: emailError.stack
            });
            return res.status(500).json({
                success: false,
                message: 'Failed to send registration email. Please try again later.'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Registration successful! We will send you a physical copy soon.'
        });

    } catch (error) {
        console.error('Error processing Catalyst registration:', {
            error: error.message,
            code: error.code,
            stack: error.stack
        });
        res.status(500).json({
            success: false,
            message: 'An error occurred during registration. Please try again later.'
        });
    }
});

module.exports = router; 