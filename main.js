// My name (string)
let name = "Kennedy";
console.log("My name is:", name);

// My age (number)
let age = 17;
console.log("My age is:", age);

// Am I a student? (boolean)
let isStudent = true;
console.log("Am I a student?", isStudent);

// My favorite colors (array)
let favoriteColors = ["blue", "green", "red"];
console.log("My favorite colors are:", favoriteColors);

// Today's date (object)
let today = new Date();
console.log("Today's date is:", today);

// Typeof operators
console.log("Type of name:", typeof name);                                // string
console.log("Type of age:", typeof age);
console.log("Type of isStudent:", typeof isStudent);
console.log("Type of favoriteColors:", typeof favoriteColors);
console.log("Type of today:", typeof today);


// let vs const
let score = 100;
score = 150; // Works! let can be changed
console.log("Score changed to:", score);

const pi = 3.14159;
// pi = 3; // Error! const cannot be reassigned
console.log("Pi is:", pi);