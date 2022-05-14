const Category = require("../models/Category.model");

module.exports.categoriesController = {
  postCategory: async (req, res) => {
    try {
      const { title, description } = req.body;
      await Category.create({ title, description });
      res.json("Категория добавлена");
    } catch (err) {
      res.json(err);
    }
  },
  deleteCategory: async (req, res) => {
    try {
      await Category.findByIdAndRemove(req.params.id);
      res.json("Категория удалена");
    } catch (err) {
      res.json(err);
    }
  },
  patchCategory: async (req, res) => {
    try {
      const { title, description } = req.body;
      await Category.findByIdAndUpdate(req.params.id, { title, description });
      res.json("Категория обновлена");
    } catch (err) {
      res.json(err);
    }
  },
  showCategoryById: async (req, res) => {
    try {
      const data = await Category.findById(req.params.id);
      res.json(data);
    } catch(err) {
      res.json(err);
    }
  },
  showCategories: async (req, res) => {
    try {
      const data = await Category.find();
      res.json(data);
    } catch(err) {
      res.json(err);
    }
  }
};