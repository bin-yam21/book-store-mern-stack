const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please enter a username"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please enter a password"],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.checkPassword = async function (inputPassword, password) {
  const res = await bcrypt.compare(inputPassword, password);
  console.log(res);
  return res;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
