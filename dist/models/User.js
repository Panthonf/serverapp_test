"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.getUsers = void 0;
const db_1 = __importDefault(require("../db"));
function getUsers(callback) {
    const query = "SELECT * FROM users";
    db_1.default.query(query, (err, rows) => {
        if (err) {
            console.error("Error retrieving users:", err);
            callback([]);
            return;
        }
        const users = rows;
        callback(users);
    });
}
exports.getUsers = getUsers;
function getUserById(id, callback) {
    const query = "SELECT * FROM users WHERE id = ?";
    db_1.default.query(query, [id], (err, rows) => {
        if (err) {
            console.error("Error retrieving user:", err);
            callback(undefined);
            return;
        }
        const user = rows[0];
        callback(user);
    });
}
exports.getUserById = getUserById;
