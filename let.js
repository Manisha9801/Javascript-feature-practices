function temp(){
    let a =10;
     {
      console.log(a) ;  //since variable name are same hence we will get reference error. But if we give some other name to the variable 'a'                       
      let a = 20;        //then we wont get this error.
      console.log(a) ; 
      }
      console.log(a) ;
    }

      temp() ;