const User = require("../models/User.model");

module.exports.userController = {
  postUser: async (req, res) => {
    try {
      const { nickname } = req.body;
      await User.create({ nickname });
      res.json("Пользователь добавлен");
    } catch (err) {
      res.json(err);
    }
  },
  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndRemove(req.params.id);
      res.json("Пользователь удален");
    } catch (err) {
      res.json(err);
    }
  },
  patchUser: async (req, res) => {
    try {
      const { nickname } = req.body;
      await User.findByIdAndUpdate(req.params.id, { nickname });
      res.json("Пользователь обновлен");
    } catch (err) {
      res.json(err);
    }
  },
  showUserById: async (req, res) => {
    try {
      const data = await User.findById(req.params.id);
      res.json(data);
    } catch(err) {
      res.json(err);
    }
  },
  showUsers: async (req, res) => {
    try {
      const data = await User.find();
      res.json(data);
    } catch(err) {
      res.json(err);
    }
  }
};