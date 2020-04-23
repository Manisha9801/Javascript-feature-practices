//to generate inifinte number multiplication .
const mul = a => b => b ? mul(b*a) : a;

// console.log(mul(2)(3)(4)());

var A = {
    x: () => {
        console.log('x');
        return A;
    },
    y : () => {
        console.log('y');
        return A;
    },
    z : () => {
        console.log('z');
        return A;
    }
}

A.x().y().z();