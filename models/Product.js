const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  category: String,
  price: Number,
  originalPrice: Number,
  image: String,
  rating: Number,
  reviews: Number,
  badge: String,
  description: String
});

module.exports = mongoose.model('Product', productSchema);
