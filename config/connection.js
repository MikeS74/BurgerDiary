//MySQL connection setup
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "k3xio06abqa902qt.cbetxkdyhwsb.us-east-1.rds.amazonaws.com" || "localhost",
  user: "en6n1rw66ipz49cs" || "root",
  password: "r3qgsb2xioo65a92" || "FreshChoice1",
  database: "tres00okzdq3psrf" || "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//Export connection to database
module.exports = connection;
