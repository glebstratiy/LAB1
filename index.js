const express = require('express')
const sizeRouter = require('./routes/size.route')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const materialRouter = require('./routes/material.route')
const userRouter = require('./routes/users.route')
const productRouter = require('./routes/products.route')
const purchaseRouter = require('./routes/purchases.route')
const hbs = require('hbs')
const homeRouter = require('./routes/home')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public/'));

hbs.registerHelper("getNav",() => {
  return new hbs.SafeString('<nav class="navbar navbar-expand-lg navbar-dark bg-primary"> <div class="container-fluid"> <a class="navbar-brand" href="http://localhost:3001/home">Roga and Kopita</a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button> <div class="collapse navbar-collapse" id="navbarColor01"> <ul class="navbar-nav me-auto"> <li class="nav-item"> <a class="nav-link" href="http://localhost:3001/products">Products</a> </li> <li class="nav-item"> <a class="nav-link" href="http://localhost:3001/users">Users</a> </li> <li class="nav-item"> <a class="nav-link" href="http://localhost:3001/sizes">Sizes</a> </li> <li class="nav-item"> <a class="nav-link" href="http://localhost:3001/materials">Materials</a> </li> <li class="nav-item"> <a class="nav-link" href="http://localhost:3001/purchases">Purchases</a> </li> </ul> </div> </div> </nav>')
})

mongoose.connect("mongodb+srv://ukitta555:milkyway12345@cluster0.nxxvi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false  })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

app.use('/sizes', sizeRouter);
app.use('/materials', materialRouter);
app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/purchases', purchaseRouter);
app.use('/home', homeRouter);
const PORT = 3001;

app.listen(PORT, () => {console.log(`App running on port ${PORT}`)});

