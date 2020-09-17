let userModel = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.createUser = async function (req, res) {
  let user = await userModel.findOne({ email: req.body.email });
  if (user)
    return res
      .status(400)
      .json({ data: null, message: "Email already exists", errors: null });

  user = new userModel({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    password: req.body.password,
  });
  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(user.password, salt);
  user.password = hashedPassword;
  await user.save();
  const token = user.generateAuthToken();
  return res.status(200).json({ data: token, message: null, errors: null });
};

exports.retrieveMe = async function (req, res) {
  let user = await userModel.findOne({ _id: req.user._id });
  if (user)
    return res.status(200).json({ data: user, message: null, errors: null });
};

exports.retrieveOne = async function (req, res) {
  let user = await userModel.findById(req.params.id);

  if (user) {
    let username = {
      fname: user.fname,
      lname: user.lname,
    };
    return res
      .status(200)
      .json({ data: username, message: null, errors: null });
  }
};
