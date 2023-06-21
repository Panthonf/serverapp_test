const User = require("../models/userModel");

const UserController = {
  getAllUsers: (req, res) => {
    User.getAllUsers((error, users) => {
      if (error) {
        res.status(500).json({ error: error.message });
      } else {
        res.json({ data: users, error: null });
      }
    });
  },

  getUserById: (req, res) => {
    const userId = req.params.id;
    User.getUserById(userId, (err, user) => {
      if (err) {
        // Handle the database error
        res.status(500).json({ error: "Internal server error" });
      } else if (user) {
        // User found
        res.json(user);
      } else {
        // User not found
        res.status(404).json({ error: "User not found" });
      }
    });
  },

  createUser: (req, res) => {
    const { fname } = req.body;

    User.createUser(fname, (err, user) => {
      if (!err) {
        res.status(200).json({ data: user, error: null });
      } else {
        res.status(404).json({ error: "Unable to create user" });
      }
    });
  },
};

module.exports = UserController;
