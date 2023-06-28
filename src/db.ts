import mysql from "mysql2";

const config = {
  host: "panthon.database.windows.net",
  user: "Panthon",
  password: "kansap160900_",
  database: "panthon",
};

const dbPool = mysql.createPool(config).promise();

dbPool
  .getConnection()
  .then(() => {
    console.log("Connected to Azure SQL Database");

    // Perform your queries or start your server here
  })
  .catch((err) => {
    console.error("Error connecting to Azure SQL Database:", err);
    process.exit(1); // Exit the process with an error code
  });

export default dbPool;
