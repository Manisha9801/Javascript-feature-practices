//sets have an important characteristics that it store only unique values.
//We cannot make sets directly like array we need to use constructor

let mySet = new Set();
// console.log(mySet);

//Unlike array we cannot add elements in sets directly we need to use the prototype functions of sets

mySet.add(1);
// console.log(mySet); //{1}

//Since a set returns a set so we can use prototype function in following way as well.
mySet.add(2).add(3).add(4).delete(2);
// console.log(mySet); //{1,3,4}

mySet.clear(); //It will remove everything from set

//To find the size of set we use Size prototype

// console.log(mySet.size());

//Interview question to convert set into array

let arrrr = [1,2,2,2,2];

// console.log([...new Set(arrrr)]);  //[1,2]
// console.log(Array.from(new Set(arrrr))); // [1,2]

//How to get unique objects from an array of objects
var nonUniArr = [{name : "Manisha"},{name : "Priya"},{name : "Rahul"},{name : "Rahul"},{name : "Rahul"},{name : "Rahul"}];
nonUniArr = nonUniArr.map(d => JSON.stringify(d));
var uniqArr = new Set(nonUniArr);
uniqArr = Array.from(uniqArr);
uniqArr = uniqArr.map(d => JSON.parse(d));
console.log(uniqArr);