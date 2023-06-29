import sql from "mssql";

const config = {
  user: "Panthon",
  password: "kansap160900_",
  server: "panthon.database.windows.net",
  database: "panthon",
  options: {
    encrypt: true, // Enable encryption for secure connection
    trustServerCertificate: true, // Accept self-signed certificates (for development/testing only)
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
    process.exit(1); // Exit the process with an error code
  });

export default dbPool;
