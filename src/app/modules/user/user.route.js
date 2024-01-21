const express = require("express");

const UserRouter = express.Router();

UserRouter.get("/", async (req, res) => {
  try {
    res.send("server running smooothly");
  } catch (error) {}
});

module.exports = UserRouter;
