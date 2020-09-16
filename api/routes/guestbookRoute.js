const express = require("express");
let router = express.Router();
let guestbookController = require("../controllers/guestbookController");

router.get("/", guestbookController.retrieveAll);
router.get("/me", guestbookController.retrieveOne);
router.post("/", guestbookController.createguestbook);

module.exports = router;
