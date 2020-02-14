const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');
const Employee = require("./class")


db = [
    {
        first_name: 'Tori',
        last_name: 'Bromma',
        title: 'Sales Lead',
        department: 'Sales',
        salary: 100000,
        manager: 'Kobe Bryant'
      },

      {
        first_name: 'Jake',
        last_name: 'Bromma',
        title: 'Sales Lead',
        department: 'Sales',
        salary: 100000,
        manager: 'Kobe Bryant'
      }


]


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
                "Sales Lead", // sales deparment id = 1 // role id = 1
                "Sales Person", // role id = 2
                "Lead Engineer", // engineering department id = 2 // role id = 2 
                "Software Engineer", // role id = 3
                "Accountant", // finance department id = 3 // role id = 4
                "Legal Team Lead", // legal department id = 4 role id = 5
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
                "Wilt Chamberlain", // manager id = 7
                "Null"
            ],
            message: "Who is the employee's manager?"
        }
    ]
).then(function(answer) {

    // console.log(answer);

    


    switch (answer.title) {

        case "Sales Lead":
            var addEmployee = new Employee(answer.first_name, answer.last_name, answer.title, "Sales", 100000, answer.manager)
            console.table(db)
        break;

        case "Sales Person":
            var addEmployee = new Employee(answer.first_name, answer.last_name, answer.title, "Sales", 80000, answer.manager)
            console.log(addEmployee);
        break;

        case "Lead Engineer":
            var addEmployee = new Employee(answer.first_name, answer.last_name, answer.title, "Engineering", 150000, answer.manager)
            console.log(addEmployee);
        break;

        case "Software Engineer":
            var addEmployee = new Employee(answer.first_name, answer.last_name, answer.title, "Engineering", 100000, answer.manager)
            console.log(addEmployee);
        break;
            
        case "Accountant":
            var addEmployee = new Employee(answer.first_name, answer.last_name, answer.title, "Finance", 125000, answer.manager)
            console.log(addEmployee);
        break;

        case "Legal Team Lead":
            var addEmployee = new Employee(answer.first_name, answer.last_name, answer.title, "Legal", 275000, answer.manager)
            console.log(addEmployee);
        break;

        case "Lawyer":
            var addEmployee = new Employee(answer.first_name, answer.last_name, answer.title, "Legal", 200000, answer.manager)
            console.log(addEmployee);
        break;



    }

    
})

} 