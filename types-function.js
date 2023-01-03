// types of function 

// 3-return function 

// function fun3(){
//     return("i am return function")
// }

// let d=fun3();
// console.log("return function :"+d);

// 4-call back function 

// function add(a,b){
//     console.log("Addition is :- ",a+b);
// }

// function sub(c,d){
//     console.log("Subtraction is :-",c-d);
// }

// function multi(h,i){
//     console.log("Multiplication is :-",h*i);
// }

// function dvd(j,k){
//     console.log("Division is :-",j/k);
// }

// function calculator(e,f,g){
//     g(e,f)
// }

// calculator(10,10,dvd)

// 5-IIFE (Imidiate invoked function expression )

// (
//     function life(){
//     console.log("I am immidiate invoked function expression");
//     }()
// )

// 6-Higher order function 
// (when one function return another function then it is called higher order function)

function one(){
    console.log("I am function no one ")

    return function two(){
        console.log("I am function no two")
    }
}

one()();