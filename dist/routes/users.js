"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = require("../models/User");
const router = express_1.default.Router();
// GET /users
router.get("/", (req, res) => {
    (0, User_1.getUsers)((users) => {
        res.json(users);
    });
});
// GET /users/:id
router.get("/:id", (req, res) => {
    const userId = parseInt(req.params.id, 10);
    (0, User_1.getUserById)(userId, (user) => {
        if (user) {
            res.json(user);
        }
        else {
            res.status(404).json({ error: "User not found" });
        }
    });
});
exports.default = router;
