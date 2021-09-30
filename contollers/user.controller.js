const User = require("../models/user.model");
const Purchase = require("../models/purchase.model");

exports.getUsersView = async (request, response) => {
  let  usersFromDB = await User.find({});

  usersFromDB = await Promise.all(usersFromDB.map (async (user) => {
    const purchases = await Purchase.count({user: user._id})
    return {
      ...user._doc,
      purchases
    }
  }))
  response.render("users/users.hbs", { users: usersFromDB });
}

exports.createUserView = async (request, response) => {
  response.render("users/createUser.hbs");
}

exports.updateUserView = async (request, response) => {
  console.log(request.params)
  response.render("users/updateUser.hbs", {id: request.params.id})
}


exports.addUserHandler = async (request, response) => {
  const newUser = new User(request.body);
  await newUser.save();
  response.redirect("/users");
}

exports.updateUserHandler = async (request, response) => {
  console.log("UPDATE BODY:", request.body);
  const updatedUser = await User.findOneAndUpdate({_id: request.body.id}, {...request.body, id: undefined}, {new: true});
  response.redirect("/users")
}

exports.removeUserHandler = async (request, response) => {
  await User.findOneAndDelete({_id: request.body.id});
  response.redirect("/users")
}