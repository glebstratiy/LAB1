const express = require('express');
const { getPurchasesView, createPurchaseView, removePurchaseHandler, addPurchaseHandler, updatePurchaseView, updatePurchaseHandler } = require('../contollers/purchases.controller');
const purchaseRouter = express.Router()

purchaseRouter.use('/removePurchaseHandler', removePurchaseHandler)
purchaseRouter.use('/updatePurchaseHandler', updatePurchaseHandler)
purchaseRouter.use('/addPurchaseHandler', addPurchaseHandler)

purchaseRouter.use('/updatePurchase/:id', updatePurchaseView)
purchaseRouter.use('/createPurchase', createPurchaseView)
purchaseRouter.use('/', getPurchasesView);

module.exports = purchaseRouter