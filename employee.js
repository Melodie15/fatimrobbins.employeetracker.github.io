var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port
  port: 3000,

  // Your username
  user: "root",

  // Your password
  password: "Melody@15",
  database: "employee_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  runSearch();

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

          case "Add department":
          addDepartment();
          break;

          case "Add role":
          addRole();
          break;

          case "Add employee":
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
      message: "What is your new department?"
      }
    ]) 
      
      .then(function(res) {
        console.log(res)
          connection.query("INSERT INTO department (name) VALUES (?)" , [res.department], function (err, data) {
              if (err) throw err;
              console.table("Successfully Inserted");
              runSearch();
          })
      }) 

  }

  function addRole() {
    inquirer.prompt([
      {
        message: "role title:",
        type: "input",
        name: "title"
      }, {
        message: "provide salary:",
        type: "number",
        name: "salary"
      }, {
        message: "enter department ID:",
        type: "number",
        name: "department_id"
      }
    ]).then(function(res) {
      connection.query("INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)", [res.title, res.salary, res.department_id], function (err, data) {
        console.table(data);
    })
    runSearch();
  })
}

function addemployee() {
  inquirer.prompt([
    {
      type: "input",
      name: "firstName",
      message: "What's the new employee first name?"
    }, {
      type: "input",
      name: "lastName",
      message: "What's the new employee last name?"
    }, {
      type: "number",
      name: "roleId",
      message: "provide the employees' role ID:"
    }, {
      type: "number",
      name: "managerID",
      message: "provide the employees' Manager's ID:"
    }

  ]).then(function(res) {
    connection.query("INSERT INTO employeelist (first_name, last_name, role_id, manager_id ) VALUES (?, ?, ?, ?)", [res.firstName, res.lastName, res.roleId, res.managerID], function (err, data) {
      if (err) throw err;
      console.table(data);
      runSearch();
  })
 
})
}

function updateRole() {
  inquirer.prompt([
    {
      message: "Which employee would you like to update?",
      type: "input",
      name: "name"
    }, {
      message: "provide the new role ID:",
      type: "number",
      name: "role_id"

    }
  ]).then(function(response) {
    connection.query("Update employee role_id = ? WHERE first_name = ?", [response.role_id, response.name], function (err, data) {
      console.table(data);
  })
  runSearch();
})
}