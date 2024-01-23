const bcrypt = require("bcrypt");
const User = require("../app/modules/user/user.model");
const Blog = require("../app/modules/blog/blog.model");

const generateHashedPassword = async (plainPassword) => {
  const saltRounds = +process.env.BCRYPT_SALT_ROUNDS;

  try {
    const hash = await bcrypt.hash(plainPassword, saltRounds);
    return hash;
  } catch (err) {
    throw err;
  }
};

const comparePassword = async (plainPassword, hashedPassword) => {
  try {
    const passwordMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return passwordMatch;
  } catch (err) {
    throw err;
  }
};

const isValidUser = async (userId, postId) => {
  if (userId && postId) {
    const blogPost = await Blog.findById(postId);
    if (!blogPost) {
      return false;
    }
    return blogPost.author.toString() === userId;
  } else {
    return false;
  }
};

module.exports = {
  generateHashedPassword,
  comparePassword,
  isValidUser,
};
