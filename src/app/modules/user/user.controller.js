const httpStatus = require("http-status");
const UserService = require("./user.service");

const UserController = {
  async createUser(req, res) {
    try {
      console.log("from controller");
      const newUser = await UserService.createUser(req.body);
      res.status(httpStatus.CREATED).json({
        status: httpStatus.CREATED,
        data: newUser,
      });
    } catch (error) {
      res
        .status(httpStatus.BAD_REQUEST)
        .json({ status: httpStatus.BAD_REQUEST, message: error.message });
    }
  },

  async loginUser(req, res) {
    try {
      console.log("from login controller");
      const result = await UserService.loginUser(req.body);

      res.status(httpStatus.OK).json({ status: httpStatus.OK, data: result });
    } catch (error) {
      res
        .status(httpStatus.BAD_REQUEST)
        .json({ status: httpStatus.BAD_REQUEST, message: error.message });
    }
  },
};

module.exports = UserController;
