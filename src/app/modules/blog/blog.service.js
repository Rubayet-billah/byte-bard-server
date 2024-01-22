// blog.service.js

const User = require("../user/user.model");
const Blog = require("./blog.model");

const BlogService = {
  async createPost(bodyData) {
    const { userId, ...postData } = bodyData;
    try {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error("User not found.");
      }
      const newPost = await Blog.create({
        ...postData,
        author: userId,
      });

      return newPost;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async getPosts() {
    try {
      const posts = await Blog.find();
      return posts;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async getPostById(postId) {
    try {
      const post = await Blog.findById(postId);
      if (!post) {
        throw new Error("Post not found.");
      }
      return post;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async updatePost(postId, postData) {
    try {
      const updatedPost = await Blog.findByIdAndUpdate(postId, postData, {
        new: true,
      });
      if (!updatedPost) {
        throw new Error("Post not found.");
      }
      return updatedPost;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async deletePost(postId) {
    try {
      const deletedPost = await Blog.findByIdAndDelete(postId);
      if (!deletedPost) {
        throw new Error("Post not found.");
      }
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

module.exports = BlogService;
