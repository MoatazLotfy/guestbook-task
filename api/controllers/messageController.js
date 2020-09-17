let messageModel = require("../models/message");
let guestbookModel = require("../models/guestbook");
let userModel = require("../models/user");

exports.retrieveAll = async function (req, res) {
  let messages = await messageModel
    .find({
      guestbookId: req.header("guestbookId"),
    })
    .populate("userId")
    .populate({
      path: "replys",
      populate: { path: "userId" },
    });
  if (messages)
    return res
      .status(200)
      .json({ data: messages, message: null, errors: null });
};

exports.createmessage = async function (req, res) {
  let message = new messageModel({
    userId: req.user._id,
    message: req.body.message,
    guestbookId: req.body.guestbookId,
    replys: [],
  });

  await message.save();

  const guestbook = await guestbookModel.findById(req.body.guestbookId);
  guestbook.messages.push(message);
  await guestbook.save();

  return res.status(200).json({ data: message, message: null, errors: null });
};
