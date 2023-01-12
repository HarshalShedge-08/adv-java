// Itrator means loop

// we can use only :-

// for of -> iterable
// array
// map
// weak

// this is example of itrator 

// let color=["red","blue","orange","yellow","indigo","green"]

// console.log(color);

// for (c of color){
//     console.log(c);
// }

//===========================================================================================================

// example of not-iterable

// let emp={
//     firstName:'sai',
//     lastName:'patil'
// }

// for (e of emp){
//     console.log(e)
// }

//===========================================================================================================

// see how to convert not-iterable to itrator 

// rules
// 1) the object must have a function with a key Symbol.iterator
// 2) Key must have function
// 3) Symbol.iterator function must have iterator object.
// 4) the iterator object must have next key function.
// 5) the next function must return a object with 2 fileds


let obj={
    [Symbol.iterator]:function(){
        count=0;

        let itra={
            next:function(){
                count++;

                if (count==1){
                    return{value:'<b> one </b> <br> ',done:false}
                }

                else if (count==2){
                    return{value:'<b> two </b> <br> ',done:false}
                }

                else if (count==3){
                    return{value:'<b> three </b> <br> ',done:false}
                }

                else if (count==4){
                    return{value:'<b> four </b> <br> ',done:false}
                }

                else if (count==5){
                    return{value:'<b> five </b> <br> ',done:false}
                }

                else if (count==6){
                    return{value:'<b> six </b> <br> ',done:false}
                }

                else if (count==7){
                    return{value:'<b> seven </b> <br> ',done:false}
                }

                else {
                    return{value:'<b> eight </b> <br> ',done:true}
                }
            }
        }

        return itra
    }
}

for (o of obj){
    document.write(o)
}
