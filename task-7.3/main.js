// Exercise 1: Function Declarations

// Regular function
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Kennedy"));  

// Function expression
const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3)); // 8

// Arrow function
const multiply = (a, b) => a * b;
console.log(multiply(4, 3)); // 12

// Arrow function with body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero!";
    }
    return a / b;
};
console.log("Divide:", divide(10, 2)); // 5
console.log("Divide by zero:", divide(10, 0)); // Cannot divide by zero!

// Exercise 2: Build These Functions

// 1. Calculate area of a rectangle
function calculateArea(length, width) {
    return length * width;
}
console.log("Area:", calculateArea(5, 3)); // 15

// 2. Convert Celsius to Fahrenheit
const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32;
};
console.log("Fahrenheit:", celsiusToFahrenheit(100)); // 212

// 3. Check if a number is even
function isEven(number) {
    return number % 2 === 0;
}
console.log("Is 4 even?", isEven(4)); // true
console.log("Is 7 even?", isEven(7)); // false

// 4. Get initials from full name
function getInitials(fullName) {
    const words = fullName.split(" ");
    return words.map(word => word[0]).join("");
}
console.log("Initials:", getInitials("Kennedy Munyi")); // KM

// 5. Reverse a string
const reverseString = (str) => {
    return str.split("").reverse().join("");
};
console.log("Reversed:", reverseString("Hello")); // olleH

// Exercise 3. Default Parameters

function greetGuest(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}
console.log(greetGuest()); // Hello, Guest!
console.log(greetGuest("Alice")); // Hello, Alice!
console.log(greetGuest("Bob", "Hi")); // Hi, Bob!

// Build: calculateTip function
function calculateTip(billAmount, tipPercentage = 15) {
    return (billAmount * tipPercentage) / 100;
}
console.log("Tip for $50 bill:", calculateTip(50)); // 7.5
console.log("Tip for $50 bill with 20%:", calculateTip(50, 20)); // 10