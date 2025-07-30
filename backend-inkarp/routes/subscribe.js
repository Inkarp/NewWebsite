const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
require('dotenv').config();

// Create transporter with error handling
let transporter;
try {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Email credentials not found in environment variables');
    throw new Error('Email configuration missing');
  }

  console.log('Creating email transporter with:', {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS ? '***' : 'missing'
  });

  transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    }
  });

  // Verify transporter configuration
  transporter.verify(function (error, success) {
    if (error) {
      console.error('Email transporter verification failed:', error);
      if (error.code === 'EAUTH') {
        console.error('\nPlease follow these steps to fix the email authentication:');
        console.error('1. Go to your Google Account settings');
        console.error('2. Enable 2-Step Verification if not already enabled');
        console.error('3. Go to Security → App passwords');
        console.error('4. Generate a new app password for "Mail"');
        console.error('5. Use that generated password as your EMAIL_PASS in .env file\n');
      }
    } else {
      console.log('Email server is ready to send messages');
    }
  });
} catch (error) {
  console.error('Error creating email transporter:', error);
}

router.post('/', async (req, res) => {
  // Ensure we're sending JSON responses
  res.setHeader('Content-Type', 'application/json');

  try {
    const { email } = req.body;
    console.log('Received subscription request for:', email);

    // Validate email
    if (!email || !email.includes('@')) {
      console.log('Invalid email format:', email);
      return res.status(400).json({
        success: false,
        message: 'Invalid email address'
      });
    }

    if (!transporter) {
      console.error('Transporter not initialized');
      throw new Error('Email service not configured');
    }

    // Send notification to admin
    const adminMailOptions = {
      from: `"Inkarp Newsletter"  <inkarpinstruments12@gmail.com>`,
      to: 'info@inkarp.co.in',
      subject: 'New Newsletter Subscription',
      html: `
        <h2>New Newsletter Subscription</h2>
        <p>A new user has subscribed to the Inkarp newsletter:</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `
    };

    // Send confirmation to subscriber
    const subscriberMailOptions = {
      from: `"Inkarp Newsletter" <info@inkarp.co.in>`,
      to: email,
      subject: 'Welcome to Inkarp Newsletter',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <img src="https://inkarp.co.in/inkarp%20old.svg" alt="Inkarp Logo" style="max-width: 200px; margin-bottom: 20px;">
          <h2 style="color: #E63946;">Welcome to Inkarp Newsletter!</h2>
          <p>Thank you for subscribing to our newsletter. You'll now receive updates about:</p>
          <ul>
            <li>Latest products and innovations</li>
            <li>Industry news and insights</li>
            <li>Upcoming events and webinars</li>
            <li>Special offers and promotions</li>
          </ul>
          <p>Stay tuned for our next update!</p>
          <p style="color: #666; font-size: 12px;">
            If you wish to unsubscribe, please click here.
          </p>
        </div>
      `
    };

    console.log('Attempting to send emails...');
    
    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(subscriberMailOptions)
    ]);

    console.log('Emails sent successfully');
    
    res.status(200).json({
      success: true,
      message: 'Thank you for subscribing to our newsletter!'
    });
  } catch (error) {
    console.error('Detailed subscription error:', {
      message: error.message,
      stack: error.stack,
      code: error.code
    });
    
    res.status(500).json({
      success: false,
      message: 'Failed to process subscription. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

module.exports = router;
