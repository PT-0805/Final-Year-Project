// backend/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const DeliveryMan = require('../models/DeliveryMan');

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access denied, no token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await DeliveryMan.findById(decoded.id).select('-password');
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid token' });
  }
};

module.exports = authMiddleware;
