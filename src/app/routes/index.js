const express = require("express");
const UserRouter = require("../modules/user/user.route");
const BlogRouter = require("../modules/blog/blog.route");

const router = express.Router();

const routes = [
  {
    path: "/users",
    route: UserRouter,
  },
  {
    path: "/posts",
    route: BlogRouter,
  },
];

routes.forEach((route) => router.use(route.path, route.route));

module.exports = router;
