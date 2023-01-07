class student {

    constructor(firstName, lastName, grade, result) {

        this.firstName = firstName,
            this.lastName = lastName,
            this.grade = grade,
            this.result = result
    }

    showData() {
        console.log(this.firstName,this.lastName,this.grade,this.result)
    }
}

let std1 = new student("sai", "patil", "A", "pass")
std1.showData()

let std2=new student("rohan","patil","E","fail")
std2.showData()