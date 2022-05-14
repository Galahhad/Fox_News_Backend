const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  text: {
    type: "String",
    required: true,
  },
  news: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "News"
  }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
