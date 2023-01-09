class library {

    constructor() {

        this.accessionNo,
            this.title,
            this.author,
            this.days,
            this.lateCharge
    }

    input() {

        this.accessionNo = prompt("Enter the accession no of books : ");
        document.write(`Accession number ${this.accessionNo} <br>  `)

        this.title = prompt("Enter the title of book : ");
        document.write(`Title of Book ${this.title} <br> `)

        this.author = prompt("Enter the author name");
        document.write(`Author name is ${this.author} <br> `)

        this.days = prompt("Enter days the book taken : ");
        document.write( `Days the book taken ${this.days} <br>`)

    }

    calc() {

        if (this.days < 5) {
            this.lateCharge = 1 * this.days
            document.write(`Late Charge ${this.lateCharge}  <br>`)
        }

        else if(this.days >=5) {
            this.lateCharge = 2 * this.days
            document.write( `Late Charge <br> ${this.lateCharge} <br>`)
        }

    }

}

let bookOne=new library()
bookOne.input()
bookOne.calc()