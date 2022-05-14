const Comment = require("../models/Comment.model");

module.exports.commentsController = {
  postComment: async (req, res) => {
    try {
      const { user, text } = req.body;
      const news = req.params.id;
      await Comment.create({ user, text, news});
      res.json("Комментарий добавлен");
    } catch (err) {
      res.json(err);
    }
  },
  deleteComment: async (req, res) => {
    try {
      await Comment.findByIdAndRemove(req.params.id);
      res.json("Комментарий удален");
    } catch (err) {
      res.json(err);
    }
  },
  patchComment: async (req, res) => {
    try {
      const { text } = req.body;
      await Comment.findByIdAndUpdate(req.params.id, { text });
      res.json("Комментарий обновлен");
    } catch (err) {
      res.json(err);
    }
  },
  showCommentById: async (req, res) => {
    try {
      const data = await Comment.findById(req.params.id).populate("news user", "title nickname");
      res.json(data);
    } catch(err) {
      res.json(err);
    }
  },
  showComments: async (req, res) => {
    try {
      const data = await Comment.find().populate("news user", "title nickname");
      res.json(data);
    } catch(err) {
      res.json(err);
    }
  },
  showCommentsByNews: async (req, res) => {
    try {
      const data = await Comment.find({news: req.params.id}).populate("news user", "title nickname");
      res.json(data);
    } catch (err) {
      res.json(err);
    }
  }
};