const express = require("express");
const UserRouter = require("../modules/user/user.route");

const router = express.Router();

const routes = [
  {
    path: "/users",
    route: UserRouter,
  },
];

routes.forEach((route) => router.use(route.path, route.route));

module.exports = router;
