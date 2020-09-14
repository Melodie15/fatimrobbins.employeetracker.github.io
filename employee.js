var mysql = require("mysql");
var inquirer = require("inquirer");

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
  runSearch();
//   queryDanceSongs();
});

function runSearch() {
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "exit"
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "View all departments":
          departmentSearch();
          break;
  
        case "View all roles":
          rolesSearch();
          break;
  
        case "View all employees":
          employeeSearch();
          break;
  
        case "exit":
          connection.end();
          break;
        }
      });
  }