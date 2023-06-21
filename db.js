const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost', // Use the container name as the host
  port: 3306,
  user: 'panthon',
  password: 'panthon',
  database: 'panthon',
});

module.exports = connection;
