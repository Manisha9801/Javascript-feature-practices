function* iterator(value){
        while(value < 300) {
         yield value++;
        }
}

const iteratorHandler =  iterator(100);

console.log(iteratorHandler.next());
console.log(iteratorHandler.next());
console.log(iteratorHandler.next());
console.log(iteratorHandler.next());