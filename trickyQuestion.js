var Employee = {
    company: 'xyz'
  }
  var emp1 = Object.create(Employee);
  delete emp1.company
//   delete Employee.company
  // console.log(emp1); //output {}
    // console.log(emp1.company); //output 'xyz'

    var emp2 = Object.assign({},Employee);  //When we use assign then new reference is created where as at time of using Object.create, it will create copy with the same reference
    delete emp2.company;
    console.log(emp2);
    console.log(emp2.company);
    console.log(Employee);
