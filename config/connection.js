// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "us-cdbr-iron-east-05.cleardb.net" || "localhost",
  user: "bbe26416610a5f" || "root",
  password: "898d203a" || "FreshChoice1",
  database: "heroku_ffde5ca58101024" || "burgers_db"
//    socketPath: '/var/run/mysqld/mysqld.sock'
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

pool.getConnection(function(err, connection) {
  // Use the connection
  connection.query('SELECT something FROM sometable', function (error, results, fields) {
    // And done with the connection.
    connection.release();
    // Handle error after the release.
    if (error) throw error;
    // Don't use the connection here, it has been returned to the pool.
  });
});

// Export connection for our ORM to use.
module.exports = connection;
