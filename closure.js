const arr = [1,2,3,4,5,6];
arr.forEach((_,i,a) => console.log(a[a.length-i-1]));


// function fact(num) {
//     if(num >=1) {
//         return fact(num-1) * num;
//     }
//     else return 1;
// }

// console.log(fact(5));

//factorial code using closure
// function fatByClosure(number) {
//     temp = number =>  number>1 ? number * temp(number-1) : 1;
//     return temp(number); 
// }

// console.log(fatByClosure(5));
// console.log(fatByClosure(6));

const fact = function (a) {
    var sum = 0;
    return function temp(a){sum = sum +a ;  return sum}
}();

console.log(fact(2));
console.log(fact(3));
console.log(fact(4));
