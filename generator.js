function* generator(i){
    yield i+10;
}

const test = generator(0);
console.log(test.next()); 
//{ value: 10, done: false }