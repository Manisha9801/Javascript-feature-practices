//write a program to add infinte numbers

// function add(a){
//     return function (b){
//         return b? add(a+b) : a
//     }
// }

const add = a => b => b? add(a+b) : a;

const infiniteAdd = add(1)(2)(3)(4)(5);
console.log(infiniteAdd());



