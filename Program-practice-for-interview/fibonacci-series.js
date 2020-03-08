function fibonacci(num){
    let prev = 0;
    let next = 1;
    console.log(prev);
    console.log(next);
    for(let i = 2 ; i<= num-2 ; i++) {
        console.log(prev + next);
        const temp = prev;
        prev = next;
        next = next + temp;
    }
}

fibonacci(10);

test = [1,2,3,4];
test.forEach((item,index,a) =>{
    console.log(a[a.length-index-1]);
})
