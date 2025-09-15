/*
Values, Data Types, and Operations
Stringing Characters Together
Control Structures and Logic
Building Arrays
Using Arrays
Creating and Using Objects
*/

/*
Values, Data Types, Operations
I will be able to use readline-sync to prompt users for input. I will be able to assign variables and utilize type conversion.
Example use case: prompt user and use appropriate data type(s).
*/

const readlineSync = require('readline-sync'); //assigned as a constant because it's not expected to change in this use case.
let GroupBranch = readlineSync.question("Select a group/branch (GPBR) location: ") //entry can be a number here (for example, 9822) that would need to be converted to a string.
console.log("There are _ users in " + GroupBranch); 

/*
Stringing Characters Together
I will be able to string characters/lines together to create useful feedback for users when inputting information into the app:
*/

let GPBR1 = '0822'
let GPBR2 = 'Q822'
let response = (`Kim is in branch ${GPBR1} and Kristen is in branch ${GPBR2}`); 
console.log(response);

/*
Control Structures and Logic
Building Arrays
Using Arrays
Using a for loop to populate an array--finding length of it to prevent loop from iterating too many times
*/

// Create an empty array with a predefined length of 3 to hold employee values
let employees = new Array(3);

// Populate the array using a for loop
for (let i = 0; i < employees.length; i++) {
  // Assign a placeholder (currently unknown) employee value for each index
  employees[i] = `Employee ${i + 1}`;
}

console.log(employees);

/* Creating and Using Objects
Creating an employee with associated traits to be retrieved later. All traits are associated with the employee object
*/

const mgr = {
  name: "Kristen",
  age: 32,
  email: "kristen@company.com",
  funFact: "Goes to sporting events--mostly for the vibes.",
  favoriteEmp: "Kim"
};

console.log(mgr);  