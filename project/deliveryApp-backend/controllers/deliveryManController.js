// backend/controllers/deliveryManController.js
const DeliveryMan = require('../models/DeliveryMan');
const Order = require('../models/Order');

// Fetch assigned orders
const getAssignedOrders = async (req, res) => {
  try {
    const deliveryMan = await DeliveryMan.findById(req.user.id).populate('assignedOrders');
    res.status(200).json(deliveryMan.assignedOrders);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching assigned orders' });
  }
};

// Update order status
const updateOrderStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    const order = await Order.findById(orderId);
    if (!order) return res.status(404).json({ error: 'Order not found' });

    order.status = status;
    await order.save();
    res.status(200).json({ message: 'Order status updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error updating order status' });
  }
};

// Confirm delivery
const confirmDelivery = async (req, res) => {
  try {
    const { orderId } = req.body;
    const order = await Order.findById(orderId);
    if (!order) return res.status(404).json({ error: 'Order not found' });

    order.status = 'Delivered';
    await order.save();
    res.status(200).json({ message: 'Order delivered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error confirming delivery' });
  }
};

module.exports = { getAssignedOrders, updateOrderStatus, confirmDelivery };
