const express = require('express');
const FitnessPlan = require('../models/FitnessPlan');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Create a new fitness plan
router.post('/', authMiddleware, async (req, res) => {
  const { planName, exercises, startDate, endDate } = req.body;
  try {
    const newFitnessPlan = new FitnessPlan({
      userId: req.user.userId,
      planName,
      exercises,
      startDate,
      endDate,
    });
    await newFitnessPlan.save();
    res.status(201).json({ message: 'Fitness plan created', plan: newFitnessPlan });
  } catch (error) {
    res.status(500).json({ message: 'Error creating fitness plan', error });
  }
});

// Get all fitness plans for the logged-in user
router.get('/', authMiddleware, async (req, res) => {
  try {
    const fitnessPlans = await FitnessPlan.find({ userId: req.user.userId });
    res.status(200).json(fitnessPlans);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching fitness plans', error });
  }
});

module.exports = router;
