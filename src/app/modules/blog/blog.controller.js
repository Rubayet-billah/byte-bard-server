const httpStatus = require("http-status");
const BlogService = require("./blog.service");

const BlogController = {
  async createPost(req, res) {
    try {
      console.log("from blog controller - create post");
      const newPost = await BlogService.createPost(req.body);
      res
        .status(httpStatus.CREATED)
        .json({ status: httpStatus.CREATED, data: newPost });
    } catch (error) {
      res
        .status(httpStatus.BAD_REQUEST)
        .json({ status: httpStatus.BAD_REQUEST, message: error.message });
    }
  },

  async getPosts(req, res) {
    try {
      const posts = await BlogService.getPosts(req.query);
      res.status(httpStatus.OK).json({ status: httpStatus.OK, data: posts });
    } catch (error) {
      res
        .status(httpStatus.BAD_REQUEST)
        .json({ status: httpStatus.BAD_REQUEST, message: error.message });
    }
  },

  async getPostById(req, res) {
    try {
      console.log("from blog controller - get post by ID");
      const postId = req.params.postId;
      const post = await BlogService.getPostById(postId);
      res.status(httpStatus.OK).json({ status: httpStatus.OK, data: post });
    } catch (error) {
      res
        .status(httpStatus.BAD_REQUEST)
        .json({ status: httpStatus.BAD_REQUEST, message: error.message });
    }
  },

  async updatePost(req, res) {
    try {
      const postId = req.params.postId;
      const updatedPost = await BlogService.updatePost(postId, req.body);
      res
        .status(httpStatus.OK)
        .json({ status: httpStatus.OK, data: updatedPost });
    } catch (error) {
      res
        .status(httpStatus.BAD_REQUEST)
        .json({ status: httpStatus.BAD_REQUEST, message: error.message });
    }
  },

  async deletePost(req, res) {
    try {
      console.log("from blog controller - delete post");
      const postId = req.params.postId;
      const result = await BlogService.deletePost(postId);
      res.status(httpStatus.OK).json({ status: httpStatus.OK, data: result });
    } catch (error) {
      res
        .status(httpStatus.BAD_REQUEST)
        .json({ status: httpStatus.BAD_REQUEST, message: error.message });
    }
  },
};

module.exports = BlogController;
