const express = require("express");
let router = express.Router();
let messageController = require("../controllers/messageController");
const auth = require("../routes/middleware/auth");

router.get("/", auth, messageController.retrieveAll);
router.post("/", auth, messageController.createmessage);
router.delete("/:id", auth, messageController.deletemessage);
router.put("/:id", auth, messageController.updatemessage);

module.exports = router;
