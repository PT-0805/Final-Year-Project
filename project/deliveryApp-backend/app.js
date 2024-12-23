// backend/app.js
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

dotenv.config(); // Load environment variables

const authRoutes = require('./routes/auth');
const deliveryManRoutes = require('./routes/deliveryMan');
const adminRoutes = require('./routes/admin');
const dealerRoutes = require('./routes/dealer');

const app = express();
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable CORS for frontend-backend communication

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/deliveryman', deliveryManRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/dealer', dealerRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
