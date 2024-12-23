// backend/routes/deliveryMan.js
const express = require('express');
const { getAssignedOrders, updateOrderStatus, confirmDelivery } = require('../controllers/deliveryManController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/assigned-orders', authMiddleware, getAssignedOrders);
router.put('/update-order', authMiddleware, updateOrderStatus);
router.post('/confirm-delivery', authMiddleware, confirmDelivery);

module.exports = router;
