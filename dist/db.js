"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mssql_1 = __importDefault(require("mssql"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    user: process.env.DB_USER || "",
    password: process.env.DB_PASSWORD || "",
    server: process.env.DB_SERVER || "",
    database: process.env.DB_DATABASE || "",
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 1433,
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
    
};
const dbPool = new mssql_1.default.ConnectionPool(config);
dbPool
    .connect()
    .then(() => {
    console.log("Connected to Azure SQL Database");
    // Perform your queries or start your server here
})
    .catch((err) => {
    console.error("Error connecting to Azure SQL Database:", err);
    process.exit(1);
});
exports.default = dbPool;
