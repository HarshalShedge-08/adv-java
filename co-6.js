class student {

    constructor() {
        this.name,
            this.hindi,
            this.english,
            this.maths,
            this.computer,
            this.average,
            this.grade
    }

    input() {

        this.name = prompt("Enter your name : ");
        document.write(`Your name : ${this.name}<br>`);

        this.hindi =parseInt( prompt("Enter your marks in hindi : "));
        document.write(`Your marks in hindi : ${this.hindi}<br>`);

        this.english =parseInt( prompt("Enter your marks in english : "));
        document.write(`Your marks in english : ${this.english}<br>`);

        this.maths =parseInt( prompt("Enter your marks in maths : "));
        document.write(`Your marks in maths : ${this.maths}<br>`);

        this.computer =parseInt( prompt("Enter your marks in computer : "));
        document.write(`Your marks in computer : ${this.computer}<br>`);

    }

    calc() {
        this.average = (this.hindi + this.english + this.maths + this.computer) /4;
        document.write(`Average marks : ${this.average}<br>`)

        if (this.average >= 90) {
            this.grade = "A++"
            document.write(`Your grade : ${this.grade}<br>`);

        }

        else if (this.average >= 75 && this.average <= 89) {
            this.grade = "A"
            document.write(`Your grade : ${this.grade}<br>`);

        }

        else {
            this.grade = "undefined"
            document.write(`Your grade : ${this.grade}<br>`);

        }

    }
}

let std = new student()
std.input()
std.calc()