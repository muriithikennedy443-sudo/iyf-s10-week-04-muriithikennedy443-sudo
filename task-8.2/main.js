// Exercise 1: Object Basics

// Creating an object
const person = {
    firstname: "Kennedy",
    lastname: "Munyi",
    age: 18,
    isStudent: true,
    hobbies: ["reading", "gaming", "traveling"],
    address: {
        city: "Nairobi",
        country: "Kenya"
    }
};

// Accessing properties
console.log("First Name:", person.firstname);
console.log("Last Name:", person.lastname);
console.log("Age:", person.age);
console.log("Is Student?", person.isStudent);
console.log("Hobbies:", person.hobbies);
console.log("City:", person.address.city);

// Modifying properties
person.age = 18;
console.log("Updated Age:", person.age);

// Adding new property
person.email = "muuriithikennedy@gmail.com";
console.log("Email added:", person.email);

// Deleting a property
delete person.isStudent;
console.log("After deleting isStudent:", person);


// Exercise 2: Object Methods

const calculator = {
    // Regular function inside object
    add: function(a, b) {
        return a + b;
    },
    // Shorthand method syntax
    subtract(a, b) {
        return a - b;
    },
    // Arrow function (not recommended for methods)
    multiply: (a, b) => a * b
};

console.log("5 + 3 =", calculator.add(5, 3)); // 8
console.log("5 - 3 =", calculator.subtract(5, 3)); // 2
console.log("5 * 3 =", calculator.multiply(5, 3)); // 15


// Exercise 3. Object Iteration

const scores = {
    math: 95,
    english: 88,
    science: 92
};

// Get all keys (labels)
console.log("Keys:", Object.keys(scores));

// Get all values
console.log("Values:", Object.values(scores));

// Get both keys and values together
console.log("Entries:", Object.entries(scores));

// Loop through all subjects and scores
for (const [subject, score] of Object.entries(scores)) {
    console.log(`${subject}: ${score}`);
}