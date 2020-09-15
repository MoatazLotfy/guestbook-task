const express = require("express");
let router = express.Router();
let userController = require("../controllers/userController");
const schema = require("../models/schemas");
const ValidationMiddleware = require("./middleware/validation");

router.post("/", userController.createUser);

module.exports = router;
