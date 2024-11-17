const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    undefined: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    select: false,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const user = mongoose.model("user", userSchema);

module.exports = user;
