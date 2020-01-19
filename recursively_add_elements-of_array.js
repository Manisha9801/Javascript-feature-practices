function createCheckDigit(membershipId) {
    const num = parseInt(membershipId,10);
    if(!isNaN(num) && num>=10){
      if(typeof membershipId === 'number') membershipId = membershipId.toString();
      const arr = Array.from(membershipId);
      const result =  arr.reduce((c,d) =>parseInt(c,10)+parseInt(d,10),0);;
      if(result >= 10) {
        return createCheckDigit(result);
      }else {
        return result;
      }
    } else {
        return membershipId;
    }
  }


  console.log(createCheckDigit(55));