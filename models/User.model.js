const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  nickname: {
    type: "String",
    require: true
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;