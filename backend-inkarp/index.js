const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const verticalRoutes = require('./routes/verticals'); // ← your newly created route file
const subscribeRoute = require('./routes/subscribe');
const careersRouter = require('./routes/careerRoutes');
const contactRouter = require('./routes/contactRoutes');
const blogRoutes = require('./routes/blogs');
const catalystRouter = require('./routes/catalystRoutes');
const webinarRouter = require('./routes/webinarRoutes');
const productRoutes = require('./routes/product');
const search =require('./routes/principals')

// Load environment variables
dotenv.config();

// Verify required environment variables
const requiredEnvVars = ['EMAIL_USER', 'EMAIL_PASS', 'MONGODB_URI'];
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  console.error('Missing required environment variables:', missingEnvVars);
  console.error('Please create a .env file with the following variables:');
  console.error('EMAIL_USER=your-gmail@gmail.com');
  console.error('EMAIL_PASS=your-app-specific-password');
  console.error('MONGODB_URI=your-mongodb-connection-string');
  process.exit(1);
}

const app = express();
const port = process.env.PORT || 5000;

// MongoDB connection options
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
  socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
};

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, mongooseOptions)
  .then(() => {
    console.log('MongoDB connected successfully');
    // Start server only after MongoDB connects
    startServer();
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// CORS configuration
const corsOptions = {
  origin: ['http://localhost:5173', 'http://localhost:3000','https://websiteinkarp.vercel.app/'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  // credentials: true
};

// Middleware
app.use(cors(corsOptions));
// app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Routes
app.use('/api/principals', search);
console.log("Search Loaded:", search);

app.use('/api/verticals', verticalRoutes); // ← wire up the new schema+route here
console.log('Instrument Routes Loaded:', verticalRoutes);

app.use('/api/products', productRoutes);
console.log('Product Routes Loaded:', require('./routes/product'));

// Subscribe route
app.use('/api/subscribe', subscribeRoute);
console.log('Subscribe Routes Loaded:', subscribeRoute);

app.use('/api/careers', careersRouter);
console.log('Career Routes Loaded:', careersRouter);

app.use('/api/contact', contactRouter);
console.log('Contact Routes Loaded:', contactRouter);

app.use('/api/blogs', blogRoutes);
console.log('Blog Routes Loaded:', blogRoutes);

app.use('/api/catalyst', catalystRouter);
console.log('Catalyst Routes Loaded:', catalystRouter);

app.use('/api/webinar', webinarRouter);
console.log('Webinar Routes Loaded:', webinarRouter);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Server is running',
    mongodb: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

// Function to start the server
function startServer() {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    console.log('Environment variables loaded:', {
      EMAIL_USER: process.env.EMAIL_USER,
      EMAIL_PASS: process.env.EMAIL_PASS ? '***' : 'missing',
      MONGODB_URI: process.env.MONGODB_URI ? '***' : 'missing',
      NODE_ENV: process.env.NODE_ENV
    });
  });
}
