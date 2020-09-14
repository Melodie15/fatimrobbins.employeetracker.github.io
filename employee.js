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
          "Add department",
          "Add role",
          "Add employee",
          "Update employee role",
          "exit"
        ]
      })
      .then(function({ action }) {
        switch (action) {
        case "View all departments":
          departmentSearch();
          break;
  
        case "View all roles":
          roleSearch();
          break;
  
        case "View all employees":
          employeeSearch();
          break;

          case "Add a department":
          addDepartment();
          break;

          case "Add a role":
          addRole();
          break;

          case "Add an employee":
          addemployee();
          break;

          case "Update employee role":
          updateRole();
          break;
  
        case "exit":
          connection.end();
          break;
        }
      });
  }

  function departmentSearch() {
    inquirer
      .prompt({
        name: "Departments",
        type: "input",
        message: "What would you like to search for?"
      })
      .then(function(answer) {
        var query = "SELECT name FROM department WHERE ?";
        connection.query(query, { department: answer.department }, function(err, res) {
          if (err) throw err;
          for (var i = 0; i < res.length; i++) {
            console.log("Department: " + res[i].name);
          }
          runSearch();
        });
      });
  }