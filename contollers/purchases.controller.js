const Purchase = require ('../models/purchase.model')
const User = require('../models/user.model')
const Size = require('../models/size.model')
const Material = require('../models/material.model')
const Product = require('../models/product.model')

exports.addPurchaseHandler = async (request, response) => {
  const newPurchase = new Purchase(request.body)
  await newPurchase.save();
  response.redirect('/purchases')
}

exports.updatePurchaseHandler = async (request, response) => {
  console.log(request.body)
  await Purchase.findOneAndUpdate({_id: request.body.id}, {...request.body, id: undefined})
  response.redirect('/purchases')
}

exports.removePurchaseHandler = async (request, response) => {
  await Purchase.findOneAndDelete({_id: request.body.id})
  response.redirect('/purchases')
}

exports.getPurchasesView = async (request, response) => {
  const purchases = await Purchase.find({})
    .populate('user')
    .populate({
      path: 'product',
      populate: [
        { path: 'size', model: "Size" },
        { path: 'material', model: "Material" }
      ]})
    .exec()
  response.render("./purchases/purchases.hbs", {purchases})
}

exports.createPurchaseView = async (request, response) => {
  const users = await User.find({})
  const products = await Product.find({}).populate('size').populate('material').exec()
  response.render("./purchases/createPurchase.hbs", {users, products})
}

exports.updatePurchaseView = async (request, response) => {
  const users = await User.find({})
  const products = await Product.find({}).populate('size').populate('material').exec()
  response.render("./purchases/updatePurchase.hbs", { users, products, id: request.params.id })
}