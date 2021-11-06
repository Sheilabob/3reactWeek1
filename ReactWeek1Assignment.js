class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(studentToRegister) {
        const checkForEmail = this.students.filter(email => email.email === studentToRegister.email)
        console.log(checkForEmail);
        if (checkForEmail.length >= 1) {
            console.log('You are already registered.');
        } else {
            this.students.push(studentToRegister);
            console.log(`Registering ${studentToRegister.name} to the bootcamp ${this.name}.`)
        };
        return this.students;
    }
}