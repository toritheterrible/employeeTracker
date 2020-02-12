const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');


const connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "poop",
    database: "employee_trackerDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    promptUser();


});

promptUser = function() {
    inquirer.prompt(

        {
            type: "list",
            name: "options",
            choices: [
                "View All Employees",
                "View All Employees by Department",
                "View All Employees by Manager",
                "Add Employee",
                "Remove Employee",
                "Update Employee Role",
                "Update Employee Manager"
            ],
            message: "What would you like to do?"
        }

).then(function(answer) {

    if(answer.options === "Add Employee") {
        newEmployee();
    }

    else if(answer.options === "") {

    }

    else {
        connection.end();
    }


});
}


var newEmployee = function () {
    inquirer.prompt(
[
        {
            type: "list",
            name: "title",
            choices: [
                "Sales Lead", // sales deparment id = 1
                "Sales Person", 
                "Lead Engineer", // engineering department id = 2
                "Software Engineer", 
                "Accountant", // finance department id = 3
                "Legal Team Lead",
                "Lawyer"
            ],
            message: "What is the employee's role?"
        },
        {
            type: "input",
            name: "first_name",
            message: "what is the employee's first name?",
            validate: async (input) => {
                if (input == "" || /\s/.test(input)) {
                    return "Please enter first or last name.";
                }
                return true;
            }
        },
        {
            type: "input",
            name: "last_name",
            message: "what is the employee's last name?",
            validate: async (input) => {
                if (input == "" || /\s/.test(input)) {
                    return "Please enter first or last name.";
                }
                return true;
            }
        },
        {
            type: "list",
            name: "manager",
            choices: [
                "Kobe Bryant", // manager id = 1
                "Shaquille Oneal", // manager id = 2
                "Jerry West", // manager id = 3
                "Kareem Abdul Jabar", // manager id = 4
                "Hakeem Olajuwon", // manager id = 5
                "Michael Jordan", // manager id = 6
                "Wilt Chamberlain" // manager id = 7
            ],
            message: "Who is the employee's manager?"
        }
    ]
).then(function(answer) {

    console.log(answer);

    switch (answer.title) {

        case "Sales Lead":

        break;

        case "Sales Person":

        break;

        case "Lead Engineer":

        break;

        case "Software Engineer":

        break;

        case "Accountant":

        break;

        case "Legal Team Lead":

        break;

        case "Lawyer":

        break;



    }
})

} 