// server.js

// Import required packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

// Load environment variables from .env file
dotenv.config();

// Create an Express app
const app = express();

// Middleware
app.use(cors()); // Allow cross-origin requests (you can restrict this to specific origins later)
app.use(bodyParser.json()); // Parse incoming JSON requests

// MongoDB URI from the .env file
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/fitness-planner-db'; // Default to local MongoDB if no URI is provided in .env

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Define a simple route (for testing)
app.get('/', (req, res) => {
  res.send('Welcome to the Fitness Planner API');
});

// Example of a user route (replace with your actual routes)
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
