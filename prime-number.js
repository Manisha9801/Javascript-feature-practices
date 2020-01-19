
//to provide prime number till the number you have passed
function pnumber(number){
    while(number >= 1) {
        if(number === 2) {
            console.log(number);
        }
        else if(number % 2 !==0){
            console.log(number);
        }
        number = number-1;
    }
}

pnumber(10);

//same as above but using recursion
function reP(number) {
    if(number === 2 || number ===1 ){
        console.log(number);
        return;
    }
    else {
        if(number %2 !== 0) {
            console.log(number);
        }
        number = number -1;
        reP(number);
        return;
    }
}

// reP(10);


//it will provide that many prime number which is passed as argument. 
function getPrimeNumber(number) {
    for(var i=1 ; number>0 ; i++) {
        if(i==1 || i==2 || i%2 !== 0) {
            console.log(i);
            number--;
        }
    }
}

getPrimeNumber(10);
