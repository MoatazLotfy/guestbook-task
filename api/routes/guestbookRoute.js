const express = require("express");
let router = express.Router();
let guestbookController = require("../controllers/guestbookController");
const auth = require("../routes/middleware/auth");

router.get("/", auth, guestbookController.retrieveAll);
router.get("/me", auth, guestbookController.retrieveOne);
router.post("/", auth, guestbookController.createguestbook);

module.exports = router;
