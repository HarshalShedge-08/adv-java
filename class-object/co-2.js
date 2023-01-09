class employee {

    constructor(b) {
        this.basic = b;
        console.log("Basic pay : " + b)

    }

    calc() {
        let pf, grossPay, netPay, houseRentAllownce, dearnessAllowance;

        dearnessAllowance = 25 / 100 * this.basic,
            console.log("Dearness Allowance : " + dearnessAllowance);

        houseRentAllownce = 15 / 100 * this.basic,
            console.log("House Rent Allowance : " +houseRentAllownce);

        pf = 8.33 / 100 * this.basic,
            netPay = this.basic + dearnessAllowance + houseRentAllownce ,
            console.log("Net Pay : " + netPay);

        grossPay = netPay + pf,
            console.log("Gross Pay : " + grossPay);
    }
}

let emp1 = new employee(300000);
emp1.calc()