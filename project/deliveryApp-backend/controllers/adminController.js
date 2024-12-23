// backend/controllers/adminController.js
const DeliveryMan = require('../models/DeliveryMan');
const Order = require('../models/Order');

// View all delivery men
const manageDeliveryMen = async (req, res) => {
  try {
    const deliveryMen = await DeliveryMan.find().select('-password');
    res.status(200).json(deliveryMen);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch delivery men' });
  }
};

// View all orders
const viewAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('assignedTo', 'name email');
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};

module.exports = { manageDeliveryMen, viewAllOrders };
