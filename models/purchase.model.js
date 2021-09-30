const mongoose = require('mongoose')

const purchaseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  },
  date: String
})

const Purchase = mongoose.model('Purchase', purchaseSchema)

module.exports = Purchase;