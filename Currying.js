// const multiply = function(a,b) {
//     console.log(a*b);
// }

//or by closure

const multiply = function(a) {
    return function(b) {
        console.log( a*b);
    }
}

const multiplyByTwo = multiply(2);
multiplyByTwo(5);

const multiplyByThree = multiply(3);
multiplyByThree(5);