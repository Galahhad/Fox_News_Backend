const News = require("../models/News.model");

module.exports.newsController = {
  postNews: async (req, res) => {
    try {
      const { title, text, category } = req.body;
      await News.create({ title, text, category });
      res.json("Новость добавлена");
    } catch (err) {
      res.json(err);
    }
  },
  deleteNews: async (req, res) => {
    try {
      await News.findByIdAndRemove(req.params.id);
      res.json("Новость удалена");
    } catch (err) {
      res.json(err);
    }
  },
  patchNews: async (req, res) => {
    try {
      const { title, text } = req.body;
      await News.findByIdAndUpdate(req.params.id, { title, text });
      res.json("Новость обновлена");
    } catch (err) {
      res.json(err);
    }
  },
  showNewsById: async (req, res) => {
    try {
      const data = await News.findById(req.params.id).populate("category", "title");
      res.json(data);
    } catch(err) {
      res.json(err);
    }
  },
  showNews: async (req, res) => {
    try {
      const data = await News.find().populate("category", "title");
      res.json(data);
    } catch(err) {
      res.json(err);
    }
  },
  showNewsByCategory: async (req, res) => {
    try {
      const data = await News.find({category: req.params.id}).populate("category", "title");
      res.json(data);
    } catch (err) {
      res.json(err);
    }
  }
};
