const gradeTracker = {
    students: [],

    addStudent(name, grades) {
        this.students.push({ name, grades });
    },

    getStudent(name) {
        return this.students.find(function(student) {
            return student.name === name;
        }) || null;
    },

    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return null;
        const values = Object.values(student.grades);
        let sum = 0;
        for (let i = 0; i < values.length; i++) {
            sum += values[i];
        }
        return sum / values.length;
    },

    getSubjectAverage(subject) {
        let sum = 0;
        for (let i = 0; i < this.students.length; i++) {
            sum += this.students[i].grades[subject];
        }
        return sum / this.students.length;
    },

    getTopStudent() {
        let top = this.students[0];
        for (let i = 1; i < this.students.length; i++) {
            const current = this.students[i];
            if (this.getStudentAverage(current.name) > 
                this.getStudentAverage(top.name)) {
                top = current;
            }
        }
        return top;
    },

    getStrugglingStudents() {
        const struggling = [];
        for (let i = 0; i < this.students.length; i++) {
            if (this.getStudentAverage(
                this.students[i].name) < 70) {
                struggling.push(this.students[i]);
            }
        }
        return struggling;
    },

    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },

    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return "Student not found";

        const avg = this.getStudentAverage(name);
        const letter = this.getLetterGrade(avg);
        const subjects = Object.keys(student.grades);

        let report = "\n===== REPORT CARD =====\n";
        report += "Student: " + name + "\n";
        report += "-------------------\n";

        for (let i = 0; i < subjects.length; i++) {
            const subject = subjects[i];
            const grade = student.grades[subject];
            const gradeLetter = this.getLetterGrade(grade);
            report += subject + ": " + grade + 
                " (" + gradeLetter + ")\n";
        }

        report += "-------------------\n";
        report += "Average: " + avg.toFixed(1) + "\n";
        report += "Final Grade: " + letter + "\n";
        report += "=======================";

        return report;
    }
};

// ===== Test your implementation =====

gradeTracker.addStudent("Alice", {
    math: 92, english: 88, science: 95
});
gradeTracker.addStudent("Bob", {
    math: 72, english: 65, science: 70
});
gradeTracker.addStudent("Charlie", {
    math: 88, english: 92, science: 85
});

console.log("Alice average:", 
    gradeTracker.getStudentAverage("Alice"));
console.log("Class average for math:", 
    gradeTracker.getSubjectAverage("math"));
console.log("Top student:", 
    gradeTracker.getTopStudent());
console.log("Struggling students:", 
    gradeTracker.getStrugglingStudents());
console.log(gradeTracker.generateReportCard("Alice"));
console.log(gradeTracker.generateReportCard("Bob"));
console.log(gradeTracker.generateReportCard("Charlie"))