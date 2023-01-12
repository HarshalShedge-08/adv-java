// prototype :- 
// -It is available in all obj, arry, function etc.
// -it is attached by the js engine at runtime

// let colors=["red","blue","green"]

// colors.push("black");

// console.log(colors);


let obj={

}

console.log(obj);

console.log(math.max(45,65,80));






// prototype inheritance: it means one obj property can use in another obj 

// let obj1 = {
//     name: "sai",
//     lastName: "patil",

//     fun: function sam() {
//         document.write(`Hello my name is ${this.name}`);
//     }
// }

// let obj2 = {
//     __proto__: obj1,

//     midName: "ram",
//     fun: function sat() {
//         document.write(`Hello my name is ${this.name} ${this.midName} ${this.lastName}`)
//     }
// }

// let obj3={

//     __proto__:obj2,

//     age: "20 year",
//     fun: function sar() {
//         document.write(`Hello my name is ${this.name} ${this.midName} ${this.lastName} <br> My age is  ${this.age}`)
//     }
// }

// obj3.fun();