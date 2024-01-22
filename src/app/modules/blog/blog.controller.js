// blog.controller.js

const BlogService = require("./blog.service");

const BlogController = {
  async createPost(req, res) {
    try {
      console.log("from blog controller - create post");
      const newPost = await BlogService.createPost(req.body);
      res.status(201).json({ data: newPost });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async getPosts(req, res) {
    try {
      console.log("from blog controller - get posts");
      const posts = await BlogService.getPosts();
      res.status(200).json({ data: posts });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async getPostById(req, res) {
    try {
      console.log("from blog controller - get post by ID");
      const postId = req.params.postId;
      const post = await BlogService.getPostById(postId);
      res.status(200).json({ data: post });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async updatePost(req, res) {
    try {
      console.log("from blog controller - update post");
      const postId = req.params.postId;
      const updatedPost = await BlogService.updatePost(postId, req.body);
      res.status(200).json({ data: updatedPost });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async deletePost(req, res) {
    try {
      console.log("from blog controller - delete post");
      const postId = req.params.postId;
      await BlogService.deletePost(postId);
      res.status(204).end();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = BlogController;
