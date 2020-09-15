let mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

let schema = new mongoose.Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

schema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, email: this.email, fname: this.fname, lname: this.lname },
    "jwtPrivateKey"
  );
  return token;
};

const user = mongoose.model("user", schema);
module.exports = user;
