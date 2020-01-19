let testData = [{
    "name" : "ascgd",
    "roll" : 34,
    "commp" : 'mindtree'
},
{
    "name" : "ascgd",
    "roll" : 4,
    "commp" : 'mindtree'
},
{
    "name" : "ascgd",
    "roll" : 3,
    "commp" : 'mindtree'
},
{
    "name" : "ascgd",
    "roll" : 8,
    "commp" : 'mindtree'
}];

const data = testData.map((tstDa) => {
    // console.log(tstDa);
});
// console.log("data",data);

// const filterData = testData.filter(data => data.roll >3);
// console.log(filterData);

const sum = (a,b) => {
    return a+b
}

var arr = [2,2,3,2];
                                     //The second parameter is the initial value which should be taken for the calculation.
const aggregate = arr.reduce(sum,1); //reduce method runs a reducer function on each element of an array to return a single output.
console.log(aggregate);

console.log(arr.indexOf(2));
console.log(arr.lastIndexOf(2));

console.log(arr.splice(0,2,876655)); //modifies same array
console.log(arr);
console.log(arr.slice(0,2)); //return new array and doesnt modify the previous array.
// console.log(arr);


const arrrr = [2,4,5,6,22];
const func = data => data<20;
console.log(arrrr.every(func));//Array.every() method returns true if all the element of the array satisfys the given condition.
console.log(arrrr.some(func));  //Array.some() method returns true if any element of the array satisfys the given condition.



