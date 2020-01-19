function fib(num) {
 var prev = 0;
 var next = 1;
 console.log(prev);
 console.log(next);
    for(var i=0 ; i<num-2 ; i++) {
        console.log(prev + next);
        temp = next;
        next = prev + next;
        prev = temp;
    }
}

fib(2);