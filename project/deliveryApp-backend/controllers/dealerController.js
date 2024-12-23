// backend/controllers/dealerController.js
const Dealer = require('../models/Dealer');
const Product = require('../models/Product');

// Add a new product
const addProduct = async (req, res) => {
  const { name, description, price } = req.body;

  try {
    const product = await Product.create({ name, description, price, dealer: req.user._id });
    req.user.products.push(product._id);
    await req.user.save();

    res.status(201).json({ message: 'Product added', product });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add product' });
  }
};

// View dealer's products
const viewProducts = async (req, res) => {
  try {
    const products = await Product.find({ dealer: req.user._id });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

module.exports = { addProduct, viewProducts };
