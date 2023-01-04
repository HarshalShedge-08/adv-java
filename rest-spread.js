// Rest Parameter:

// using rest parameter we can store multiple vlaue in single
// variable.

// 1) we use simply three dots (...)
// 2) rest parameter must be end with variable.

// function first(...a){
// console.log("value of a =",a);
// }

// first(1,2,3,4,5,6,7,8,9,0)

//=========================================================================

// Spread Operator:
// using spread operator we can spread single array into multiple
// variable.
// 1) using (...array) , use this in the last 



function second(a, b, c, d, e, f, g, h, i,j) {
    console.log("value of a =", a);
    console.log("value of b =", b);
    console.log("value of c =", c);
    console.log("value of d =", d);
    console.log("value of e =", e);
    console.log("value of f =", f);
    console.log("value of g =", g);
    console.log("value of h =", h);
    console.log("value of i =", i);
    console.log("value of j =", j);
}
let array=[1,2,3,4,5,6,7,8,9,0]
second(...array)