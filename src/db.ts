import { ConnectionPool } from "mssql";

const config = {
  server: "serverapp_production.database.windows.net",
  database: "serverapp",
  authentication: {
    type: "default",
    options: {
      userName: "panthon",
      password: "Kansap160900_",
    },
  },
  options: {
    encrypt: true,
    trustServerCertificate: false,
  },
};

const dbPool = new ConnectionPool(config);

dbPool
  .connect()
  .then(() => {
    console.log("Connected to Azure SQL Database");
    // Now you can execute your queries or start your server
  })
  .catch((err: Error) => {
    console.error("Error connecting to Azure SQL Database:", err.message);
  });

export default dbPool;
