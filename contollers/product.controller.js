const Material = require("../models/material.model")
const Product = require("../models/product.model")
const Size = require("../models/size.model")



exports.addProductHandler = async (request, response) => {
  const newProduct = new Product(request.body)
  await newProduct.save()
  response.redirect('/products')
}

exports.updateProductHandler = async (request, response) => {
  await Product.findOneAndUpdate({_id: request.body.id}, {...request.body, id: undefined}, {new: true});
  response.redirect('/products')
}

exports.removeProductHandler = async (request, response) => {
  await Product.findOneAndDelete({_id: request.body.id});
  response.redirect('/products')
}


exports.getProductsView = async (request, response) => {
  const productsFromDB = await Product.find({}).populate('size').populate('material').exec()
  response.render('./products/products.hbs', { products: productsFromDB })
}

exports.updateProductView = async (request, response) => {
  const sizes = await Size.find({})
  const materials = await Material.find({})
  response.render('./products/updateProduct.hbs', { sizes, materials, id: request.params.id })
}

exports.createProductView = async (request, response) => {
  const sizes = await Size.find({})
  const materials = await Material.find({})
  response.render('./products/createProduct.hbs', {sizes, materials})
}