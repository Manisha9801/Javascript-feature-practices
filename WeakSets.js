//weaksets are used in simillar way as sets but we there are following difference:-
//Infact we can pass array in weaksets which are also array of objects.

const myWeakSets = new WeakSet([{a:1},{b:2}]);

//WeakSets are not iteratable objects like Sets, hence we cannot use loop in this.

//It doesnt have lots of functions, It has following prototype:- CONSTRUCTOR,ADD,DELETE,HAS which are less than SETS.

//The application of weak set is as follows:-

const ws =  new WeakSet()
class SomeClass {
    constructor(){
        ws.add(this);
    }
    
    method(){
        if(!ws.has(this)) {
            throw new TypeError('SomeClass.prototype.method called incompatible object');
        }
    }
}