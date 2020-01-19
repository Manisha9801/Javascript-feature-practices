function temp() {
    var a = 10;
    console.log('first',a);
}
console.log('second',a);
temp();

// let is having block scope
function temp1() {
    let a = 10;
    {
        console.log(a); 
        let a = 20;
        console.log(a);
    }
    console.log(a);
}
temp1();
// output :- Reference error 


var foo = "Foo";
let test = "Bar";
console.log(window.foo);  //Foo
console.log(window.test);  //undefined

let a =10;
let a = 20;
console.log(a);


