// backend/controllers/authController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const DeliveryMan = require('../models/DeliveryMan');

// Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await DeliveryMan.findOne({ email });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};

// Register user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await DeliveryMan.findOne({ email });
    if (existingUser) return res.status(400).json({ error: 'Email already in use' });

    const user = await DeliveryMan.create({ name, email, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
};

module.exports = { loginUser, registerUser };
