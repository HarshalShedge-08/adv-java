// function-calling

// 1-call by value  

let K=function (a,b){
    console.log("addition is",a+b);
}
K(50,50)


//2-call by refference

function fun(c){

}

let emp={
    name:'sai',
    lastName:'patil',
    age:20
}
fun(emp)
console.log(emp);
