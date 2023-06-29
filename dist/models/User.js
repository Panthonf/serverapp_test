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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.getUsers = void 0;
const db_1 = __importDefault(require("../db"));
const mssql_1 = require("mssql");
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield db_1.default.query("SELECT * FROM users");
            return result.recordset.map(({ firstName, lastName }) => ({
                firstName,
                lastName,
            }));
        }
        catch (error) {
            console.error("Error retrieving users:", error);
            return [];
        }
    });
}
exports.getUsers = getUsers;
function getUserById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const request = new mssql_1.Request(db_1.default);
            request.input("id", id);
            const result = yield request.query("SELECT * FROM users WHERE id = @id");
            const [row] = result.recordset;
            return row
                ? { firstName: row.firstName, lastName: row.lastName }
                : undefined;
        }
        catch (error) {
            console.error("Error retrieving user:", error);
            return undefined;
        }
    });
}
exports.getUserById = getUserById;
