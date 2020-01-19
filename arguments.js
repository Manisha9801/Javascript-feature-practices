//program to return the length of argument passed to a function

function temp() {
    // console.log("arguments",arguments);
    console.log(arguments.__proto__);
    return [].slice.call(arguments).length;
}

temp(1);
// console.log(temp(1,2,3,4,5,6,7,8));