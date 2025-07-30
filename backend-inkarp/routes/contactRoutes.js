const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

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

// Initialize email transporter
const transporter = createTransporter();
if (transporter) {
    verifyTransporter(transporter);
}

// Helper function to format inquiry type
const formatInquiryType = (type) => {
    const types = {
        'pharma': 'Pharma',
        'academic_research': 'Academic Research',
        'government': 'Government',
        'sub_dealer': 'Sub-Dealer'
    };
    return types[type] || type;
};

// Helper function to format purchase timeline
const formatPurchaseTimeline = (timeline) => {
    const timelines = {
        'immediate': 'Immediately (within a week)',
        'soon': 'Soon (within 1-3 months)',
        'future': 'Future (3-6 months)',
        'long_term': 'Long Term (more than 6 months)'
    };
    return timelines[timeline] || timeline;
};

// Contact form submission route
router.post('/submit', async (req, res) => {
    try {
        console.log('Received contact form submission:', req.body);

        const {
            name,
            email,
            phone,
            jobTitle,
            city,
            state,
            inquiryType,
            application,
            message
        } = req.body;

        // Validate required fields
        if (!name || !email || !phone || !inquiryType) {
            return res.status(400).json({
                success: false,
                message: 'Name, email, phone, and inquiry type are required fields'
            });
        }

        // Send email to admin
        const adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: 'info@inkarp.co.in',
            subject: `Inkarp Enquiry Details from ${name}`,
            html: `
                <div style="background:#fff;max-width:600px;margin:0 auto;border:1px solid #ccc;">
                  <div style="background:#b80000;color:#fff;padding:20px 0;text-align:center;font-size:2rem;font-weight:bold;border-bottom:4px solid #b80000;">
                    Inkarp Enquiry Details
                  </div>
                  <div style="padding:32px 24px 24px 24px;background:#f5f5f5;">
                    <table style="width:100%;font-size:1rem;color:#222;">
                      <tr><td style="font-weight:bold;width:120px;padding:6px 0;">Name :</td><td>${name}</td></tr>
                      <tr><td style="font-weight:bold;padding:6px 0;">E-mail :</td><td><a href="mailto:${email}" style="color:#0066cc;text-decoration:underline;">${email}</a></td></tr>
                      <tr><td style="font-weight:bold;padding:6px 0;">Phone :</td><td>${phone}</td></tr>
                      <tr><td style="font-weight:bold;padding:6px 0;">Job Title :</td><td>${jobTitle || ''}</td></tr>
                      <tr><td style="font-weight:bold;padding:6px 0;">City :</td><td>${city || ''}</td></tr>
                      <tr><td style="font-weight:bold;padding:6px 0;">State :</td><td>${state || ''}</td></tr>
                      <tr><td style="font-weight:bold;padding:6px 0;">Enquiry :</td><td>${formatInquiryType(inquiryType)}</td></tr>
                      <tr><td style="font-weight:bold;padding:6px 0;">Application</td><td>${application || ''}</td></tr>
                      <tr><td style="font-weight:bold;padding:6px 0;vertical-align:top;">Message :</td><td style="white-space:pre-line;">${message || ''}</td></tr>
                    </table>
                  </div>
                  <div style="background:#f5f5f5;padding:16px 0 8px 0;text-align:center;font-size:0.95rem;color:#b80000;border-top:2px solid #b80000;">
                    &copy; Copyright 2020 Inkarp. All rights reserved by Inkarp Powered by <a href="https://mbw.co.in/" style="color:#0066cc;text-decoration:underline;">MBW</a>.
                  </div>
                </div>
            `
        };

        // Send email to user
        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Thank you for contacting Inkarp',
            html: `
                <h2>Thank you for contacting Inkarp</h2>
                <p>Dear ${name},</p>
                <p>We have received your inquiry and will get back to you as soon as possible.</p>
                <p>Here's a copy of your message:</p>
                <p><strong>Job Title:</strong> ${jobTitle || 'Not provided'}</p>
                <p><strong>Location:</strong> ${city || ''} ${state || ''}</p>
                <p><strong>Inquiry Type:</strong> ${formatInquiryType(inquiryType)}</p>
                <p><strong>Application:</strong> ${application || 'Not specified'}</p>
                <p><strong>Message:</strong></p>
                <p>${message || 'No message provided'}</p>
                <br>
                <p>Best regards,</p>
                <p>Team InKarp</p>
                <p>InKarp Instruments Private Ltd</p>
                <p>Email: info@inkarp.co.in</p>
                <p>Phone: +91 40 2717 2293, +91 99666 34008</p>
            `
        };

        // Send both emails
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(userMailOptions)
        ]);

        console.log('Contact form emails sent successfully');
        res.json({
            success: true,
            message: 'Message sent successfully! We will get back to you soon.'
        });

    } catch (error) {
        console.error('Error processing contact form:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while sending your message. Please try again later.'
        });
    }
});

module.exports = router; 