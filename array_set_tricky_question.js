//you have a array with duplicate entries. how you will tell that the array has dupliacte element without executing any loop
var arr = [1,2,3,4,1,2,3,4];
const aa = new Set(arr);
arr.length === aa.size ?console.log('Array doesn\'t have any dupliacte element'):console.log('Array has duplicate elements');


//How to get unique objects from array 
var brr =[
    {a:1,b:2,c:3},
    {a:1,b:2,c:3},
    {a:2,b:26,c:73},
    {a:81,b:92,c:30}
];

const strBrr = brr.map(p => JSON.stringify(p));  
const uniqueSet = new Set(strBrr);
brr = Array.from(uniqueSet);
console.log(brr);//Here we will get unique values, but when the order of keys are changed within a object the it won't give us correct answer.
                //Eg :- {a:1,b:2,c:3},{b:2,a:1,c:3}, in this case this logic of finding unique value will break;

//compare two object
var aObj = {a : 1};
var bObj = {a : 1};
console.log(aObj === bObj); //false
console.log(aObj ==  bObj); //false
//When we compare object then == operator checks the reference of both the object. If both the object have same reference then only it will return
//otherwise it will return false.
// Simillarly for === operator it will return false.

var cObj = aObj;
console.log(aObj === cObj);//true
console.log(aObj == cObj);//true
//since while copying oject we are using '=' which copies the reference of object. Hence we are getting true.

var dObj = {...aObj};
console.log(bObj === aObj);

var value = 2+true; //3
var val = '2'+true; //2true
//The plus operator between a number and a boolean or two boolean will convert boolean to number. Hence, true converts to 1 and you get result of 2+1 
var val2 = true + '2'; //2true
//If one of the operands of the plus (+) operator is string it will convert other number or boolean to string and perform a concatenation. For the same reason, "2"+true will return "2true"
console.log(value);
console.log(val);
console.log(val2);

console.log(-'34'+10)  //minus(-) in front of a string is an unary operator that will convert the string to a number and will make it negative. Hence, -'34' becomes, -34 and then plus (+) will perform simple addition as both the operands are number. 