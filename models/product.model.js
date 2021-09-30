const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  description: String,
  photoURL: String,
  price: Number,
  size: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Size"
  },
  material: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Material"
  }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product;