
//There are two types of objects in javascript, one is functional and other is non-functional object.

//Non-functional Object

let pizza = {
    crust  :3,
    toppings : 4,
    hasBacon : true,
    getTotalNumberOfToppings : function(){
        return this.toppings;
    }
}

console.log(pizza.hasBacon); 
console.log(pizza.getTotalNumberOfToppings()); 

//To add a new property in a object
pizza.price = '20$';
console.log(pizza); //new property gets added

//To remove a property from a object
delete(pizza.crust);
console.log(pizza);  //you can see its removed from the object



//Fuunctional Object

//We can make properties of an object as public and private
let pizzza = function () {
    var crust = "thin";  //privat member which will not get printed in console.
    this.hasBacon = true; //public memeber it will get printed in console.
    //to access the priavte member we need public methods
    this.crustType= function() {
        return crust
    }
}

var pizzA = new pizzza();

console.log("pizzA",pizzA);
console.log(pizzA.crustType());
