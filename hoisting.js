//hoisting is a default feature of moving all the declarations to the top of current scope.
//hoisting is only done for declarations not initializations

x = 2;
console.log('x',x);
var x;


y = -1;
console.log('y',y); // here o/p will be y -1 because only hoisting of the variable is done not the initialization, 
var y = 2; // since y=2 is assigned after console is executed so we will get earlier assigned value of 'y'

console.log('z',z);  // here we will get undefined since, only hoisting is done for declaration and initialization is done after console statement so we will get undefined.
var z = 45;
 
console.log('m',m); // here you will get ReferenceError: m is not defined since hoisting is not done for let and const variables.
let m =45;