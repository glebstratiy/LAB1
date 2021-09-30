const express = require ('express');
const { getProductsView, createProductView, addProductHandler, removeProductHandler, updateProductHandler, updateProductView } = require('../contollers/product.controller');

const productRouter = express.Router()


productRouter.use('/addProductHandler', addProductHandler);
productRouter.use('/updateProductHandler', updateProductHandler);
productRouter.use('/removeProductHandler', removeProductHandler);

productRouter.use('/updateProduct/:id', updateProductView);
productRouter.use('/createProduct', createProductView);
productRouter.use('/', getProductsView);

module.exports = productRouter