class salary {

    constructor(){
        this.name,
        this.address,
        this.subSpecial,
        this.phone,
        this.mSal
    }


    input() {

        this.name = prompt('enter your name : ');
        document.write(`Your Name is :  ${this.name }<br>`);

        this.address = prompt('Your address is : ');
        document.write(`your address is : ${this.address}<br>`);

        this.subSpecial = prompt('Your subSpecial is : ');
        document.write(`your subSpecial is : ${ this.subSpecial}<br>`);

        this.phone = prompt('Your phone is : ');
        document.write(`your phone is : ${ this.phone}<br>`);

        this.mSal = prompt('enter your monthly salary is :')
        document.write(`Your Monthly Salary is : ${this.mSal}<br>`)
        

    }


    calc(){
        let annulSalary,it;

        annulSalary=12*this.mSal;

        document.write(`annul salary is :  ${annulSalary}<br>`)

        if(annulSalary>175000){
            it=5/100*(annulSalary-175000);

            document.write(`your income tax is : ${it}<br>`)
        }

        else{
            it=0;
            document.write(`income tax is : ${it}<br>`)
        }
    }
}

let s1 =new salary()
s1.input()
s1.calc()