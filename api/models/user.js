let mongoose = require("mongoose");

let schema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const user = mongoose.model("user", schema);
module.exports = user;
