// Exercise 1: Array Basics

// Creating arrays
const fruits = ["apple", "banana", "oranges"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["hello", 42, true, null];

console.log("Fruits:", fruits);
console.log("Numbers:", numbers);
console.log("Mixed:", mixed);

// Accessing array elements
console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);
console.log("Total fruits:", fruits.length);

// Modifying arrays
fruits.push("grape"); // Add to end
console.log("After push:", fruits);

fruits.unshift("mango"); // Add to beginning
console.log("After unshift:", fruits);

fruits.pop(); // Remove from end
console.log("After pop:", fruits);

fruits.shift(); // Remove from beginning
console.log("After shift:", fruits);

// Exercise 2: Array Methods

const nums = [1, 2, 3, 4, 5];

//for each - do something with each element
console.log("forEach:");
nums.forEach((num) => console.log(num * 2));

// map - transform each element
const doublded = nums.map((num) => num * 2);
console.log("Doubled:", doublded);

// filter - keep elements that passes a test
const evenNumbers = nums.filter((num) => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// find - get first element that passes test
const firstEven = nums.find((num) => num % 2 === 0);
console.log("First even number:", firstEven);

// reduce - combine all elemets into one
const sum = nums.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);

// includes - check if elements exists
console.log("Includes 3?", nums.includes(3)); // true
console.log("Includes 9?", nums.includes(9)); // false


// Build These Programs

// 1. Double all numbers in an array
const myNumbers = [3, 6, 9, 12, 15];
const allDoubled = myNumbers.map((num) => num * 2);
console.log("All numbers doubled:", allDoubled);

// 2. Filter out negative numbers
const withNegatives = [4, -2, 7, -5, 10, -1, 3];
const positiveOnly = withNegatives.filter((num) => num >= 0);
console.log("Positive numbers:", positiveOnly);

// 3. Find first numbers greater than 10
const mixedNum = [3, 7, 12, 5, 20, 8];
const firstBig = mixedNum.find((num) => num > 10);
console.log("First number greater than 10:", firstBig);

// 4. Calculate product of all numbers in an array
const toMultiply = [1, 2, 3, 4, 5];
const product = toMultiply.reduce((total, num) => total * num, 1);
console.log("Product of all numbers:", product);
    