USE employee_db;

INSERT INTO department(name)
VALUES ("Digital Marketing");

INSERT INTO department(name)
VALUES ("Software Engineering");

INSERT INTO department(name)
VALUES ("Web Development");

INSERT INTO department(name)
VALUES ("Web Design");


INSERT INTO role (title, salary, department_id)
VALUES ("Marketing Assistant", 35000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Marketing Director", 95000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Java Programmer", 90000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Software Engineer", 1250000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Front End Developer", 75000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Wordpress Developer", 60000, 4);

INSERT INTO employeelist (first_name, last_name, role_id, Manager_id) 
VALUES ("Andrew", "Jackson", 10, 20); 

INSERT INTO employeelist (first_name, last_name, role_id, Manager_id) 
VALUES ("Benjamin", "Franklin", 11); 

INSERT INTO employeelist (first_name, last_name, role_id, Manager_id) 
VALUES ("Thomas ", "Jefferson", 12, 21); 

INSERT INTO employeelist (first_name, last_name, role_id, Manager_id) 
VALUES ("John", "Adams", 13); 

INSERT INTO employeelist (first_name, last_name, role_id, Manager_id) 
VALUES ("George", "Washington", 14); 

INSERT INTO employeelist (first_name, last_name, role_id, Manager_id) 
VALUES ("James", "Madison", 15); 