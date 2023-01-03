// types of function 

// 4-call back function 

function add(a,b){
    console.log("Addition is :- ",a+b);
}

function sub(c,d){
    console.log("Subtraction is :-",c-d);
}

function multi(h,i){
    console.log("Multiplication is :-",h*i);
}

function dvd(j,k){
    console.log("Division is :-",j/k);
}

function calculator(e,f,g){
    g(e,f)
}

calculator(10,10,dvd)