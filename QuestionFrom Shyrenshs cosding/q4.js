//check a number is integer or not
 //Method one
  let ans=Number.isInteger = (12);
  console.log(ans); // true

  //or
  function checkInteger(number){
    console.log(Number.isInteger(number));
  }
  checkInteger(12); // true
  checkInteger(12.5); // false

  //method 2

  let num=12;
  if(num%1===0){
    console.log(num,"is an integer");
  }else{
    console.log(num,"is not an integer");
  }

  