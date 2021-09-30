const Material = require("../models/material.model");

exports.getMaterials = async (request, response) => {
  const materialsFromDB = await Material.find({});
  response.render("../views/material/materials.hbs", { materials: materialsFromDB });
}

exports.createMaterial = async (request, response) => {
  response.render("../views/material/createMaterial.hbs");
}

exports.addMaterial = async (request, response) => {
  const newMaterial = new Material(request.body);
  await newMaterial.save();
  response.redirect("/materials");
}