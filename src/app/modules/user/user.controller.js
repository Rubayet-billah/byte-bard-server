const UserService = require("./user.service");

const UserController = {
  async createUser(req, res) {
    try {
      console.log("from controller");
      const newUser = await UserService.createUser(req.body);
      res.status(201).json({ data: newUser });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async loginUser(req, res) {
    try {
      console.log("from login controller");
      const result = await UserService.loginUser(req.body);

      res.status(200).json({ data: result });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = UserController;
