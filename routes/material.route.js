const express = require('express');
const { addMaterial, createMaterial, getMaterials } = require('../contollers/material.controller');

const materialRouter = express.Router();


materialRouter.use('/addMaterial', addMaterial);
materialRouter.use('/createMaterial', createMaterial);
materialRouter.use('/', getMaterials);

module.exports = materialRouter;