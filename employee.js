var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port
  port: 3000,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "employeeDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  queryAllEmployees();
//   queryDanceSongs();
});
