"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.getAllUsers = void 0;
const User_1 = require("../models/User");
function getAllUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield (0, User_1.getUsers)();
            res.json(users);
        }
        catch (error) {
            console.error("Error retrieving users:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });
}
exports.getAllUsers = getAllUsers;
function getUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = parseInt(req.params.id, 10);
            const user = yield (0, User_1.getUserById)(id);
            if (user) {
                res.json(user);
            }
            else {
                res.status(404).json({ error: "User not found" });
            }
        }
        catch (error) {
            console.error("Error retrieving user:", error);
            res.status(500).json({ error: "Internal server error" });
        }
    });
}
exports.getUser = getUser;
