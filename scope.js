// 1-function level scope
// 2-global scope 
// 3-block level scope

// 4-hoisted

// (we can use function before designing 

//     all declaration move to top / if the value is declare then default value show in this only declaration will hoisted)

// ex-1 :- 

// fun();

// function fun(){
//     console.log("hi");
// }

// ex - 2

//  console.log(num1);

//  var num1;

//  console.log(k);

//  let k=1;


// 5-Currying 

// ( multiple arguments can break into multiple single argument function

// in this we can call second function inside one funtion )

// function one(){
//     console.log("I am function no. one ")

//     return function two(){
//         console.log("I am function no. two")

//         return function three(){
//             console.log("I am function no. three");
//         }
//     }
// }

// // one()()()

// let f1=one()
// console.log(f1);

// let f2=f1()
// console.log(f2);

// let f3=f2()
// console.log(f3);


// 6-lexical scope (inner function search variable from bottom to top)

// a=10;

// function fun1(){
//     b=20;
//      return function fun2(){
//         c=30;
//        return function fun3(){
//             console.log(b-c+a);
//         }
    
//     }
// }

// fun1()()()

// 7-Clouser 

// function will get exicute after calling

// in this we can call one function many time 

 
 