let guestbookModel = require("../models/guestbook");

exports.retrieveAll = async function (req, res) {
  let guestbook = await guestbookModel
    .find()
    .select("-__v")
    .populate("userId")
    .exec();
  if (guestbook)
    return res
      .status(200)
      .json({ data: guestbook, message: null, errors: null });
};

exports.retrieveOne = async function (req, res) {
  let guestbook = await guestbookModel.findOne({ userId: req.body.userId });
  if (guestbook)
    return res
      .status(200)
      .json({ data: guestbook, message: null, errors: null });
};

exports.createguestbook = async function (req, res) {
  let user = await guestbookModel.findOne({ userId: req.body.userId });
  if (user)
    return res.status(400).json({
      data: null,
      message: "you already have guestbook",
      errors: null,
    });

  let guestbook = new guestbookModel({
    userId: req.body.userId,
    messages: [],
  });

  await guestbook.save();

  return res.status(200).json({ data: guestbook, message: null, errors: null });
};
