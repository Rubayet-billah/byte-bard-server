// blog.js

const express = require("express");
const BlogController = require("./blog.controller");

const BlogRouter = express.Router();
BlogRouter.post("/create-post", BlogController.createPost);
BlogRouter.get("/:postId", BlogController.getPostById);
BlogRouter.patch("/:postId", BlogController.updatePost);
BlogRouter.delete("/:postId", BlogController.deletePost);
BlogRouter.get("/", BlogController.getPosts);

module.exports = BlogRouter;
