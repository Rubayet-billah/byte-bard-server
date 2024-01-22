const {
  generateHashedPassword,
  comparePassword,
} = require("../../../helpers/helperFunctions");
const User = require("./user.model");

const UserService = {
  async createUser(userData) {
    try {
      const existedUser = await User.findOne({ email: userData.email });
      if (existedUser) throw new Error("User already exists.");

      const { password } = userData;
      const hashedPassword = await generateHashedPassword(password);
      userData.password = hashedPassword;

      const newUser = await User.create(userData);
      return newUser;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  async loginUser(credentials) {
    try {
      const { email, password } = credentials;

      // Check if the user with the provided email exists
      const existingUser = await User.findOne({ email });
      if (!existingUser) {
        throw new Error("Invalid credentials. User not found.");
      }

      // Compare the provided password with the stored hashed password using the helper function
      const passwordMatch = await comparePassword(
        password,
        existingUser.password
      );
      if (!passwordMatch) {
        throw new Error("Invalid credentials. Password does not match.");
      }

      // You may generate and return an authentication token here

      return existingUser;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

module.exports = UserService;
