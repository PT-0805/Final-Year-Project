// backend/routes/admin.js
const express = require('express');
const { manageDeliveryMen, viewAllOrders } = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/delivery-men', authMiddleware, manageDeliveryMen);
router.get('/orders', authMiddleware, viewAllOrders);

module.exports = router;
