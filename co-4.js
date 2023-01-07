class employee {

    constructor() {
        this.pan,
            this.name,
            this.inTax,
            this.tax
    }

    input() {

        this.pan = prompt("Enter your personal account number : ");
        document.write(`Your prsonal account number : ${this.pan}<br>`);

        this.name = prompt("Enter your name : ");
        document.write(`Your name : ${this.name}<br>`);

        this.inTax = prompt("Enter your tax income : ");
        document.write(`Your tax income : ${this.inTax}<br>`);  

    }

    calc() {

        if (this.inTax <= 100000) {
            this.tax = 0
            document.write(`Your tax : ${this.tax}<br>`);

        }

        else if (this.inTax > 100001 && this.inTax <= 150000) {
            this.tax = 10 / 100 * (this.inTax - 100000)
            document.write(`Your tax : ${this.tax}<br>`);

        }

        else if (this.inTax > 150001 && this.inTax <= 250000) {
            this.tax = 5000 + 20 / 100 * (this.inTax - 150000)
            document.write(`Your tax : ${this.tax}<br>`);

        }

        else {
            this.tax = 25000 + 30 / 100 * (this.inTax - 250000)
            document.write(`Your tax : ${this.tax}<br>`);

        }

    }
}

let emp = new employee()
emp.input()
emp.calc()