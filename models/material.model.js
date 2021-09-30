const mongoose = require('mongoose')

const materialSchema = new mongoose.Schema({
  origin: String,
  name: String
})

const Material = mongoose.model('Material', materialSchema)

module.exports = Material;