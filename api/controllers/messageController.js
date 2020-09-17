let messageModel = require("../models/message");
let guestbookModel = require("../models/guestbook");
let userModel = require("../models/user");
let replyModel = require("../models/reply");

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

exports.deletemessage = async function (req, res) {
  const message = await messageModel.deleteOne({ _id: req.params.id });
  await replyModel.deleteMany({ messageId: req.params.id });

  return res.status(200).json({ data: message, message: null, errors: null });
};

exports.updatemessage = async function (req, res) {
  let message = await messageModel.findById(req.params.id);
  if (!message)
    return res.status(404).send(response(null, "message not found", null));
  console.log("yarab n5ls " + req.body.message);
  message.message = req.body.message ? req.body.message : message.message;

  message = await message.save();
  return res.status(200).json({ data: message, message: null, errors: null });
};
