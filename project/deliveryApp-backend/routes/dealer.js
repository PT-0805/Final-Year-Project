// backend/routes/dealer.js
const express = require('express');
const { addProduct, viewProducts } = require('../controllers/dealerController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/add-product', authMiddleware, addProduct);
router.get('/products', authMiddleware, viewProducts);

module.exports = router;
