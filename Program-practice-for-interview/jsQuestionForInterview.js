//write a program to print the number from 1 to 100
//But for the numbers which are multiple of 3 print "fizz" and for the multiple of 5 print "Buzz"
//And the numbers which are multiple of both print "fizzBuzz"

for(var i=1 ; i<=20 ;i++){  
    console.log(i%15 === 0 ? "FizzBuzz" : (i%3 === 0 ? "Fizz" : (i%5 === 0 ? "Buzz" : i)))
}