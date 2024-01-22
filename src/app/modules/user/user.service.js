const User = require("./user.model");

const UserService = {
  async createUser(userData) {
    try {
      console.log("from service");
      const newUser = await User.create(userData);
      return newUser;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

module.exports = UserService;
