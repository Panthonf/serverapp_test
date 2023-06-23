import mysql, { Connection } from "mysql";
const connection: Connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "panthon",
  database: "panthon",
});

connection.connect((err: mysql.MysqlError | null) => {
  if (err) {
    console.error("Error connecting to database:", err.message);
    return;
  }
  console.log("Connected to the database");
});

export default connection;
