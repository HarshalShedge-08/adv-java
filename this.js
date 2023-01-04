// this keyword - (there are 3 types)

// a) implicit binding
//     means automatically binding

// let emp={
//     name:"sai",
//     lastName:"Patil",
//     age:20,

    // fun:function sam(){console.log(`hi my name is ${this.name}  ${this.lastName} ${this.age} `)}
// }

// emp.fun( )

// ======================================================================================================

// b) Explicit binding:
		// Manual binding
		
		// function sam()
		// {
		// console.log('i am',this.name,this.lastName,this.age)
		// }
		
		// sam.call(emp)

// ======================================================================================================

// c) New binding:
// New keyword create empty object.

// function sam(){
// this.name='harshal',
// this.lastName='shedge'

// }

// let a=new sam()
// console.log(a)

// ======================================================================================================

// e) Default:
// by default this show global object.

function sai(){
    console.log(this);
}
sai()