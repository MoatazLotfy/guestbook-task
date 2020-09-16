let mongoose = require("mongoose");

let messageSchema = new mongoose.Schema({
  message: {
    type: String,
    trim: true,
    required: true,
    min: 3,
    max: 255,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  guestbookId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "guestbook",
  },
  replys: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "reply",
    },
  ],
});

const message = mongoose.model("message", messageSchema);
module.exports = message;
