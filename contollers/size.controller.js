const Size = require("../models/size.model");
const Product = require("../models/product.model")
exports.getSizes = async (request, response) => {
  let sizesFromDB = await Size.find({});
  sizesFromDB = await Promise.all(sizesFromDB.map(
    async (s) => {
      const products = await Product.count({ size: s._id })
      return {
        ...s._doc,
        products
      }
    }
  ))
  response.render("../views/sizes/sizes.hbs", { sizes: sizesFromDB });
}

exports.createSize = async (request, response) => {
  response.render("../views/sizes/createSize.hbs");
}

exports.addSize = async (request, response) => {
  const newSize = new Size(request.body);
  const sizeInDB = await newSize.save();
  response.redirect("/sizes");
}