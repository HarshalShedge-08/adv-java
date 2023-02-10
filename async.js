//sync function--

// function one(){
// console.log("1 function");

// }
 
// function two(){

//     console.log("2 function");
// }

// function three(){

//     console.log("3 function");
// }

// one()
// two()
// three()

//====================================================================================

// Sync Callback Function:--


// function fun(a){

//     two();
//     console.log("i am Fun function");
// }
// fun(two)

// function two(){
//     console.log("i am two function");
// }

//====================================================================================

// Async CallBack Function:--


function fun(a){

    setTimeout(two, 3000);
     console.log("i am Fun function");
 }
 fun(two)
 
 function two(){
     console.log("i am two function");
 }