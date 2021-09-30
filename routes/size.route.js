const express = require('express');
const { getSizes, addSize, createSize } = require('../contollers/size.controller');

const sizeRouter = express.Router();


sizeRouter.use('/addSize', addSize);
sizeRouter.use('/createSize', createSize);
sizeRouter.use('/', getSizes);

module.exports = sizeRouter;