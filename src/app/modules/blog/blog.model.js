const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: String,
    category: String,
    content: String,
    authorName: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

// Create the Blog model
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
