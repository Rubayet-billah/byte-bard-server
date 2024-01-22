const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

// Create the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
