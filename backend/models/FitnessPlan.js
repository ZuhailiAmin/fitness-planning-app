const mongoose = require('mongoose');

const fitnessPlanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  planName: { type: String, required: true },
  exercises: [{
    name: String,
    sets: Number,
    reps: Number,
    weight: Number,
  }],
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});

const FitnessPlan = mongoose.model('FitnessPlan', fitnessPlanSchema);
module.exports = FitnessPlan;
