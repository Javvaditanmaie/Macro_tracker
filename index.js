const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to MongoDB once
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const foodRoutes = require('./routes/foodRoutes');
const diaryRoutes = require('./routes/diaryRoutes');

app.use('/api/auth', authRoutes);   // For register/login
app.use('/api', userRoutes);        // For /profile
app.use('/api', foodRoutes);        // For /foods
app.use('/api', diaryRoutes);       // For /diary, /dashboard

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
