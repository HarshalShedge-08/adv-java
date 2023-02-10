setTimeout(fun,3000)

function fun() {
    console.log('hii');
}
fun()

function fun1(x) {
    console.log('hello');
    x()
}
fun1(fun)

function fun2(){
    console.log('sai');
}
fun2()

//=============CALL BACK HELL===============

setTimeout(() => {
    console.log('call back hell 1');

    setTimeout(() => {
        console.log('call back hell 2');

        setTimeout(() => {
            console.log('call back hell 3');

            setTimeout(() => {
                console.log('call back hell 4');

                setTimeout(() => {
                    console.log('call back hell 5');

                }, 2000);

            }, 3000);

        }, 2000);

    }, 2000);

}, 2000);