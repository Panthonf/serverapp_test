import sql from "mssql";
import dotenv from "dotenv";

dotenv.config();

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

const dbPool = new sql.ConnectionPool(config);

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

export default dbPool;
