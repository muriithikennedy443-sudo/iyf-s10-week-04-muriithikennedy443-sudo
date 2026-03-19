// Exercise 1: If/Else Statements

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }   
}

console.log("Grade for 95:", getGrade(95)); // A
console.log("Grade for 85:", getGrade(85)); // B
console.log("Grade for 75:", getGrade(75)); // C
console.log("Grade for 65:", getGrade(65)); // D
console.log("Grade for 50:", getGrade(50)); // F

// Exercise 2: Switch Statements

function getDayName(dayNumber) {
    switch(dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day number";
    }
}

console.log("Day for number 0:", getDayName(0)); // Sunday
console.log("Day for number 1:", getDayName(1)); // Monday
console.log("Day for number 2:", getDayName(2)); // Tuesday
console.log("Day for number 3:", getDayName(3)); // Wednesday
console.log("Day for number 4:", getDayName(4)); // Thursday
console.log("Day for number 5:", getDayName(5)); // Friday
console.log("Day for number 6:", getDayName(6)); // Saturday

// Exercise 3: Loops

// For loop
console.log("For loop:");
for (let i = 0; i <= 5; i++) {
    console.log(i);
}

// While loop
console.log("While loop:");
let counter = 0;
while (counter <= 5) {
    console.log(counter);
    counter++;
}

// For...of loop
console.log("For...of loop:");
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color);
}

// Build These Programs

// 1. Print numbers from 1 to 100
console.log("Numbers from 1 to 100:");
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// 2. Print only even numbers from 1 to 50
console.log("Even numbers from 1 to 50:");
for (let i = 1; i <= 50; i ++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// 3. FizzBuzz
console.log("FizzBuzz:");
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


// 4. Print a triangle of stars
console.log("Triangle of stars:");
for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 0; j < i; j++) {
        stars += "*";
    }
    console.log(stars);
}