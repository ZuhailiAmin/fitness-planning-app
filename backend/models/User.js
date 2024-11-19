const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  goals: { type: String, enum: ['marathon', 'gym'], default: 'marathon' },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);