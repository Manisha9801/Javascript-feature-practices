const temp = {
    name : "Manisha",
    company : "Mindtree"
};

temp.name = "cvjhcgj";
console.log(temp);

Object.freeze(temp);
temp.name ="changed"; //This will not update the value of the object since we have freezed it's content.
console.log(temp);