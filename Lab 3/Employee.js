// Employee.js

let employees = [
    { id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary: 5000 },
    { id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary: 4000 },
    { id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary: 5500 },
    { id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary: 9000 }
];

// Return all employees
function getAllEmployees() {
    return employees;
}

// Return employee full names sorted in ascending order
function getEmployeeNames() {
    return employees
        .map(emp => `${emp.firstName} ${emp.lastName}`)
        .sort();
}

// Return total salary of all employees
function getTotalSalary() {
    return employees.reduce((sum, emp) => sum + emp.Salary, 0);
}

// Export functions so index.js can use them
module.exports = {
    getAllEmployees,
    getEmployeeNames,
    getTotalSalary
};
