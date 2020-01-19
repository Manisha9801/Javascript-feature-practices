
//Iterator is an object which handles the sequence as well as returns the value which is the next value in the sequence .
function demoIterator() {
    let count = 0;
    const counter = {
        next : function() {
            return {value : count++, done: true}
        }
    }
    return counter;
};

const test = demoIterator();
console.log(test.next());

//Any object is an itertator is it satisfies the iterator protocol that is to have a "next" function which returns an object that contain two
//properties which is "value" and  "done", "value" is the next value in the iterator where as "done" returns true if the value is the last 
//value in the iterator which is consumed.