const express = require('express');
const { getUsersView, createUserView, addUserHandler, updateUserView, updateUserHandler, removeUserHandler } = require('../contollers/user.controller');

const userRouter = express.Router();


userRouter.use('/addUserHandler', addUserHandler);
userRouter.use('/updateUserHandler', updateUserHandler)
userRouter.use('/removeUserHandler', removeUserHandler)



userRouter.use('/updateUser/:id', updateUserView);
userRouter.use('/createUser', createUserView);
userRouter.use('/', getUsersView);







module.exports = userRouter;