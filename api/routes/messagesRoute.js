const express = require("express");
let router = express.Router();
let messageController = require("../controllers/messageController");
const auth = require("../routes/middleware/auth");

router.get("/", auth, messageController.retrieveAll);
router.post("/", messageController.createmessage);

module.exports = router;
