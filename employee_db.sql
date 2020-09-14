-- Drops the employee_db if it exists currently --
DROP DATABASE IF EXISTS employee_db;
-- Creates the "employee_db" database --
CREATE DATABASE employee_db;

-- Makes it so all of the following code will affect employee_db --
USE employee_db;

-- Creates the table "employeeList" within employee_db --
CREATE TABLE employeelist (
  id INT AUTO_INCREMENT NOT NULL,
   first_name VARCHAR(30) NOT NULL,
   last_name VARCHAR(30) NOT NULL,
   role_id INT NOT NULL,
   manager_id INT,
   PRIMARY KEY (id)

);

CREATE TABLE role (
 id INT AUTO_INCREMENT NOT NULL,
   title VARCHAR(30) NOT NULL,
   salary DECIMAL(7,0) NOT NULL,
   department_id INT NOT NULL,
   PRIMARY KEY (id)
);

CREATE TABLE department (
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
   PRIMARY KEY (id)
);

