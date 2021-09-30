const mongoose = require('mongoose')

const sizeSchema = new mongoose.Schema({
  description: String,
  name: String
})

const Size = mongoose.model('Size', sizeSchema)

module.exports = Size;