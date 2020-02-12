DROP DATABASE IF EXISTS employee_trackDB;

CREATE DATABASE employee_trackDB;

USE employee_trackDB

CREATE TABLE department (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(30) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE employee (
  id int NOT NULL AUTO_INCREMENT,
  first_name varchar(30) DEFAULT NULL,
  last_name varchar(30) DEFAULT NULL,
  role_id int DEFAULT NULL,
  manager_id int DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE role (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(30) DEFAULT NULL,
  salary decimal(10,2) DEFAULT NULL,
  department_id int NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- ### Alternative way to insert more than one row
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jack", "Williams", 1, 1), 
("chocolate", 3.10, 120), 
("strawberry", 3.25, 75);