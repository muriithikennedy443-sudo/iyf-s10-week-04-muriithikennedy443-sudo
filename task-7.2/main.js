// Exercise 1: Number Operrations

// Basic math
let a = 10;
let b = 3;

console.log("Addition:", a + b);        // 13
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b); // 30
console.log("Division:", a / b);
console.log("Modulus:", a % b);        // 1
console.log("Exponentiation:", a ** b); // 1000

// Increment and Decrement
let count = 0;
count++; // count is now 1
console.log("After increment:", count);
count--; // count is now 0
console.log("After decrement:", count);

//Exercise 2: String Operations

let firstName = "Kennedy";
let lastName = "Munyi";

// Joining word together
let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);

// Template literals (modern way)
let greeting = `Hello, ${firstName}!`;
let message = `Your name has ${firstName.length} letters.`;
console.log(greeting);
console.log(message);

// String methods
console.log("Uppercase:", fullName.toUpperCase());
console.log("Lowercase:", fullName.toLowerCase());
console.log("First letter:", firstName.charAt(0));
console.log("Include 'Munyi'?", fullName.includes("Munyi"));

// Exercise 3: Comparison and Logical Operators

// Compaison operators
console.log("5 > 3):", 5 > 3); // true
console.log("5 < 3):", 5 < 3); // false
console.log("5 === 5):", 5 === 5); // true
console.log("5 !== 3):", 5 !== 3); // true
console.log("5== '5'):", 5 == '5'); // true 
console.log("5 === '5'):", 5 === '5'); // false

// Logical operators
console.log("true AND true:", true && true); // true
console.log("true AND false:", true && false); // false
console.log("false AND false:", false && false); // false
console.log("true OR false:", true || false); // true
console.log("false OR false:", false || false); // false
console.log("NOT true:", !true);

// Challenge

let age = 17;

// Age in days
let ageInDays = age * 365;
console.log("Age in days:", ageInDays);

// Age in hours
let ageInHours = ageInDays * 24;
console.log("Age in hours:", ageInHours);

// Year I'll turn 100
let currentYear = new Date().getFullYear();
let yearTurning100 = currentYear + (100 - age);
console.log("Year I'll turn 100:", yearTurning100); 