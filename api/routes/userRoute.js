const express = require("express");
let router = express.Router();
let userController = require("../controllers/userContoller");

router.post("/", userController.createUser);

module.exports = router;
