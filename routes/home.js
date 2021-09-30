const express = require('express');
const homeRouter = express.Router()

homeRouter.use('/', (request, response) => {
  response.render('home.hbs')
})

module.exports = homeRouter