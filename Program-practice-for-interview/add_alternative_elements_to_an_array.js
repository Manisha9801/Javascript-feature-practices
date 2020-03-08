//add alternative elements into an array such that first element should be negative then positive and accordingly.....
const arr = [1,2,3,-1,-4,-7,7,-2,-3,-4];
const expectedOut = [] ;

let i =0;
while(i < (arr.length)) {
  if((!expectedOut.length && arr[i] <0)||expectedOut.length >0 && ((expectedOut[expectedOut.length-1]>0 && arr[i] <0) || (expectedOut[expectedOut.length-1]<0 && arr[i]>0) )){
      expectedOut.push(arr[i]);
      arr.splice(i,1);
      i=0;
  }else {
      i++;
  }
}

if(arr.length) {
  expectedOut.push(...arr);
}

console.log(expectedOut);