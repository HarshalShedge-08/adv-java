class members {

    constructor() {

        this.empNo,
            this.name,
            this.basicSal,
            this.dearAllow,
            this.houseRallow,
            this.travAllow,
            this.pf,
            this.grossSal
    }

    input() {

        this.empNo = prompt("Enter the employee no : ");
        document.write(`Employee no is :<b> ${this.empNo} </b> <br>`);

        this.name = prompt("Enter the name of the employee : ");
        document.write(`Employee name is :<b> ${this.name} </b> <br>`);

        this.basicSal = parseInt(prompt("Enter your basic salary : "));
        document.write(`Your basic salary is :<b> ${this.basicSal} </b> <br>`);
 
    }

    calc() {

        if (this.basicSal >= 20000) {
            this.dearAllow = this.basicSal * (53 / 100),
            document.write(`Your dearness allowance is : ${this.dearAllow}<br>`);

                this.travAllow = this.basicSal * (12 / 100),
                document.write(`Your travelling allowance is : ${this.travAllow}<br>`);

                this.houseRallow = this.basicSal * (10 / 100),
                document.write(`Your house rent allowance is : ${this.houseRallow}<br>`);

                this.pf = this.basicSal * (8 / 100),
                document.write(`Your provident fund is : ${this.pf}<br>`);

                this.grossSal = (this.basicSal + this.dearAllow + this.travAllow + this.houseRallow) - this.pf
            document.write(`Your gross salary is :<b> ${this.grossSal} </b> <br>`);

        }

        else if (this.basicSal >= 10000 || this.basicSal < 20000) {
            this.dearAllow = this.basicSal * (45 / 100),
            document.write(`Your dearness allowance is : ${this.dearAllow}<br>`);

                this.travAllow = this.basicSal * (10 / 100),
                document.write(`Your travelling allowance is : ${this.travAllow}<br>`);

                this.houseRallow = this.basicSal * (12 / 100),
                document.write(`Your house rent allowance is : ${this.houseRallow}<br>`);

                this.pf = this.basicSal * (7.5 / 100),
                document.write(`Your provident fund is : ${this.pf}<br>`);

                this.grossSal = (this.basicSal + this.dearAllow + this.travAllow + this.houseRallow) - this.pf
            document.write(`Your gross salary is :<b> ${this.grossSal} </b> <br>`);
        }

        else if (this.basicSal < 10000) {
            this.dearAllow = this.basicSal * (40 / 100),
            document.write(`Your dearness allowance is : ${this.dearAllow}<br>`);

                this.travAllow = this.basicSal * (8 / 100),
                document.write(`Your travelling allowance is : ${this.travAllow}<br>`);

                this.houseRallow = this.basicSal * (14 / 100),
                document.write(`Your house rent allowance is : ${this.houseRallow}<br>`);

                this.pf = this.basicSal * (7 / 100),
                document.write(`Your provident fund is : ${this.pf}<br>`);

                this.grossSal = (this.basicSal + this.dearAllow + this.travAllow + this.houseRallow) - this.pf
            document.write(`Your gross salary is :<b> ${this.grossSal} </b> <br>`);
        }
    }

}

let mem = new members()
mem.input()
mem.calc()