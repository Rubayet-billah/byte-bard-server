const express = require("express");
const UserController = require("./user.controller");

const UserRouter = express.Router();

UserRouter.post("/create-user", UserController.createUser);
UserRouter.post("/login", UserController.loginUser);

module.exports = UserRouter;
