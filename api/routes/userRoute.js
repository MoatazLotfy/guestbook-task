const express = require("express");
let router = express.Router();
let userController = require("../controllers/userController");
const schema = require("../models/schemas");
const ValidationMiddleware = require("./middleware/validation");
const auth = require("../routes/middleware/auth");

router.post("/", ValidationMiddleware(schema.user), userController.createUser);
router.get("/me", auth, userController.retrieveMe);

module.exports = router;
