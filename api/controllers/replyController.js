let replyModel = require("../models/reply");
let messageModel = require("../models/message");
let userModel = require("../models/user");

exports.retrieveAll = async function (req, res) {
  let replys = await replyModel
    .find({
      messageId: req.header("messageId"),
    })
    .populate("userId");
  if (replys)
    return res.status(200).json({ data: replys, message: null, errors: null });
};

exports.createreply = async function (req, res) {
  let reply = new replyModel({
    userId: req.user._id,
    reply: req.body.reply,
    messageId: req.body.messageId,
  });

  await reply.save();

  const message = await messageModel.findById(req.body.messageId);
  message.replys.push(reply);
  await message.save();

  return res.status(200).json({ data: reply, message: null, errors: null });
};
