const express = require("express");
let router = express.Router();
let replyController = require("../controllers/replyController");
const auth = require("../routes/middleware/auth");

router.get("/", auth, replyController.retrieveAll);
router.post("/", auth, replyController.createreply);

module.exports = router;
