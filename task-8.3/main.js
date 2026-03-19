//  The Student Data

const student = [
    { name: "Alice", age: 22, grade: 85, major: "CS" },
    { name: "Bob", age: 20, grade: 90, major: "Math" },
    { name: "Charlie", age: 21, grade: 78, major: "CS" },
    { name: "David", age: 23, grade: 92, major: "Physics" },
    { name: "Eve", age: 19, grade: 88, major: "CS" }
];

/// Your Task

// 1. Get all students names
const names = student.map(student => student.name);
console.log("Student Names:", names);

// 2. Get students with grade > 80
const highAchievers = student.filter(student => student.grade > 80);
console.log("High Achievers:", highAchievers);

// 3. Find the student named "Charlie"
const charlie = student.find(student => student.name === "Charlie");
console.log("Charlie:", charlie);

// 4. Calculate average grade
const averageGrade = student.reduce((total, student) => total + student.grade, 0) / student.length;
console.log("Average Grade:", averageGrade);

// 5. Get CS majors only
const csMajors = student.filter(student => student.major === "CS");
console.log("CS Majors:", csMajors);

// 6. Sort by grade (highest first)
const sortedByGrade = [...student].sort((a, b) => b.grade - a.grade);
console.log("Sorted by grade:", sortedByGrade)

// 7. Check if any student has grade > 90
const hasTopGrade = student.some(student => student.grade > 90);
console.log("Any student with grade > 90?", hasTopGrade);

// 8. Check if all students are passing (grade >= 60)
const allPassing = student.every(student => student.grade >= 60);
console.log("All students passing?", allPassing);