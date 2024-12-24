function sayName(){
  console.log("A");
  console.log("N");
  console.log("J");
  console.log("A");
  console.log("N");
}
sayName;//THIS is the reference 
sayName();//this is the execution

function addSum(num1,num2){
  console.log(num1+num2);
}
addSum(3,5)//8
let result=addSum(3,5);//8
console.log(result);//check it out later 
console.log(addSum(3,8));//

function loginUser(username){
  return `${username } is logged in `
}
loginUser();//undefind
loginUser("Anjan");
console.log(loginUser("Anjan"));

