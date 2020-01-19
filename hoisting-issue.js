
console.log('var keyword leads to hoisting of a variable and it has functional scope');
//If we reassign a varaible but doesn't redefine it inside a func
var y =2;
var x = function() {
    console.log(y);
    y=1;
}
x();
//output is 2, because of lexical scoping in js variable defined in global scope is available all over the global scope.

/*********************************************************************************************************************/
//  if you do console.log(y) without var y=1 then answer will be 2 
    var y = 2;
    var x = function() {
        console.log(y);
    }
    x();
    // output is '2' because of lexical scoping of a variable.

/*********************************************************************************************************************/
// if you provide a declaration with 'var' keyword 
    var y = 2;
    var x = function() {
        console.log(y);
        var y=2;
    }
    x();
    //output is 'undefined', since we have declared a variable with 'var' keyword hence after compiling hoisting will
    // be done because of which it's declaration will be available at the top scope.



/*********************************************************************************************************************/
console.log('let keyword avoids hoisting of a variable and it has block scope');

let a = 2;
let b = function() {
    console.log(a);  //output is 'undefined', because we dont have scope of 'a' inside our func. even though it's defined globally
}
x();

/*********************************************************************************************************************/

let te = function() {
    let p =1;
    {
        let p = 2;
        console.log('p inside',p);  // p inside 2
    }
    console.log('p outside',p); // p inside 1
}
 te();
 
 //since there is no hoisting and 'let' has block scope we will have the above behaviour.