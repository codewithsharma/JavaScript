// Declaring a variable.

const dob = 1999;
let studentName = "Dev";
var age = 12;

// Retreving a data or variables
console.log(studentName);
console.log(age);
console.log(dob);
console.warn(age); // Warn will run at last

// Try to assign new value to constant

// dob = 2000  // it will break the code and exit

var x = 100; // global value
{
  let x = 10; // Block scope Value
  console.log(x); // getting block scoped value
}
console.log(x); //  getting global value

// declare var to const

var z = 13;
{
  const z = 11;
  console.log(z);
}
console.log(z);
