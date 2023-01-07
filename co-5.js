class mobike {

    constructor() {
        this.bikeNo,
            this.phoneNo,
            this.name,
            this.days,
            this.charge
    }

    input() {

        this.bikeNo = prompt("Enter your bike no : ");
        document.write("Bike no " + this.bikeNo)

        this.phoneNo = prompt("Enter your phone no : ");
        document.write("Phone no " + this.phoneNo)

        this.name = prompt("Enter your name : ");
        document.write("Name " + this.name)

        this.days = prompt("Enter days the bike taken on rent : ");
        document.write("NO. of days " + this.days)


    }

    clac() {

        if (this.days <= 5) {
            this.charge = 500 * this.days
            document.write("Charge " + this.charge);
        }

        else if (this.days >= 5 || this.days <= 10) {
            this.charge = 400 * this.days
            document.write("Charge " + this.charge);
        }

        else {
            this.charge = 200 * this.days
            document.write("Charge " + this.charge)
        }
    }
}

let bikeOne = new mobike()
bikeOne.input()
bikeOne.calc()

