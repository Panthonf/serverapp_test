const pool = require("../db");

const User = {
  getAllUsers: (callback) => {
    const query = "SELECT * FROM users";
    pool.query(query, callback);
  },

  getUserById: (id, callback) => {
    const query = "SELECT * FROM users WHERE id = ?";
    pool.query(query, [id], callback);
  },

  createUser: (fname, callback) => {
    const insertQuery = "INSERT INTO users (fname) VALUES (?)";
    const insertValues = [fname];

    pool.query(insertQuery, insertValues, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        const newUser = {
          id: result.insertId,
          fname: fname,
        };
        callback(null, newUser);
      }
    });
  },
};

module.exports = User;
