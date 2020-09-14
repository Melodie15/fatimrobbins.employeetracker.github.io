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
        message: "What would you like to do?",
        name: "action",
        type: "list",
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
  connection.query("SELECT * FROM department" , function (err , data) {
      console.table(data) ;
      runSearch();
  })
}

function roleSearch() {
    connection.query("SELECT * FROM role" , function (err , data) {
        console.table(data) ;
        runSearch();
    })
  }

  function employeeSearch() {
    connection.query("SELECT * FROM employeelist" , function (err , data) {
        console.table(data) ;
        runSearch();
    })
  }

  function addDepartment() {
      inquirer.prompt([{
          type: "input",
          name: "department",
          message: "Please provide a new department"
      }, ]) .then(function(res) {
          connection.quert('INSERT INTO department (name) VALUES (?)' , [res.department], function (err, data) {
              if (err) throw err;
              console.table("Successfully Inserted");
              runSearch();
          })
      })   
  }