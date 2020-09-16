let messageModel = require("../models/message");

exports.retrieveAll = async function (req, res) {
  let messages = await messageModel.find({ guestbookId: req.body.guestbookId });
  if (messages)
    return res
      .status(200)
      .json({ data: messages, message: null, errors: null });
};

exports.createmessage = async function (req, res) {
  let message = new messageModel({
    userId: req.body.userId,
    message: req.body.message,
    guestbookId: req.body.guestbookId,
    replys: [],
  });

  await message.save();

  return res.status(200).json({ data: message, message: null, errors: null });
};
