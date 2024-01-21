const express = require("express");
const UserRouter = require("../modules/user/user.route");

const router = express.Router();

router.use("/users", UserRouter);

module.exports = router;
