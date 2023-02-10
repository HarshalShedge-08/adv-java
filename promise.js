// Promise is Object 
// 1-resolve
// 2-reject

// let a=new Promise((resolve,reject)=>{

//     resolve();
//     reject();

// })

// a.then(()=>{console.log('hi');}).catch(()=>{console.log('hello');})

//======================================async await function==========================================

// async function fun(){
//     return 'this is return function';
// }
// console.log(fun());


async function fun1() {

    console.log('msg-2');
    await console.log('msg-3');
    console.log('msg-4');
    await console.log('msg-5');
    console.log('msg-6');

}
console.log('msg-1');
fun1()
console.log('msg-7');

