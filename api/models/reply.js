let mongoose = require("mongoose");

let replySchema = new mongoose.Schema({
  reply: {
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
  messageId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "message",
  },
});

const reply = mongoose.model("reply", replySchema);
module.exports = reply;
