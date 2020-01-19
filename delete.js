const obje = {company : "xyz"}
const temp = Object.create(obje);
delete obje.company;
// delete temp.company;
console.log(temp);  //output :- {}
console.log(temp.company); //output :- xyz
// delete obje.company;
// console.log(temp);
// console.log(temp.company);