let mongoose = require("mongoose");

let guestbookSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "message",
    },
  ],
});

const guestbook = mongoose.model("guestbook", guestbookSchema);
module.exports = guestbook;
