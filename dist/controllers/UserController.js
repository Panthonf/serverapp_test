"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.getAllUsers = void 0;
const User_1 = require("../models/User");
function getAllUsers(req, res) {
    (0, User_1.getUsers)((users) => {
        res.json(users);
    });
}
exports.getAllUsers = getAllUsers;
function getUser(req, res) {
    const userId = parseInt(req.params.id, 10);
    (0, User_1.getUserById)(userId, (user) => {
        if (user) {
            res.json(user);
        }
        else {
            res.status(404).json({ error: "User not found" });
        }
    });
}
exports.getUser = getUser;
