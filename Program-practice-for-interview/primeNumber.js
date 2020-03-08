//function to test whether the number is prime or not
function testIsPrime(num) {
    var isPrime = true;
    for(let i=2 ; i<= (num/2) ; i++) {
        if(num % i === 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime
}

// console.log(testIsPrime(2));

//function to show prime numbers till 20
function primeNumTilltwenty(num) {
    for(let i=2 ; i<=num ; i++){
        let isPrime = true;
        for(let j=2 ; j<= (i/2) ; j++) {
            if(i%j === 0 && i!==2) isPrime=false
        }
        if(isPrime)
        console.log(i)
    }
}

// primeNumTilltwenty(20);

//prime number

function printPrime(num){
    for()
}