const express = require('express');
const router = express.Router();
const Career = require('../models/Career');

// Get all active jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Career.find({ isActive: true });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Post a new job
router.post('/', async (req, res) => {
  const job = new Career({
    title: req.body.title,
    department: req.body.department,
    location: req.body.location,
    type: req.body.type,
    description: req.body.description,
    responsibilities: req.body.responsibilities,
    qualifications: req.body.qualifications,
  });

  try {
    const newJob = await job.save();
    res.status(201).json(newJob);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
