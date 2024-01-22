const UserService = require("./user.service");

const UserController = {
  async createUser(req, res) {
    try {
      console.log("from controller");
      const newUser = await UserService.createUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = UserController;
