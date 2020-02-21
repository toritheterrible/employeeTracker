class Employee {

    constructor(first_name, last_name, title, role_id, manager_id) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.title = title;
        this.role_id = role_id;
        this.manager_id = manager_id;
        
    }

    addtoDatabase() {
        var query = connection.query(
            "INSERT INTO employee SET ?"

        )

    }

    
}

module.exports = Employee;