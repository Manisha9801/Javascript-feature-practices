Function.prototype.myFunction = function(){
    console.log('The prototype is created');
}

function temp() {

}

temp.myFunction();

var test = {
    name : "Manisha",
    city : "Bihar"
};

test.__proto__.showDetails = function() {
    console.log(this.name + " is from " + this.city + this.qualification + this.myHobby)
}
test.__proto__.qualification = "B.E";
test.myHobby = "Dancing";

temp2 = {
    name : "Rahul"
}

temp2.__proto__ = test;

temp2.showDetails();

