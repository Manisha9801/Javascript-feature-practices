//to check if the number sequnece passed contains '2' or not.

function dynamic(...args) {
    return args.indexOf(2) !== -1 ? true: false;
}

console.log(dynamic(1,4,5));
console.log(dynamic([1,3,4,2,8]));

