// backend/models/DeliveryMan.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const deliveryManSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  assignedOrders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
}, { timestamps: true });

// Hash password before saving
deliveryManSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model('DeliveryMan', deliveryManSchema);
