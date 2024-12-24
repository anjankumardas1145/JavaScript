function calculateCart(num1){
  return num1;
}
console.log(calculateCart(100))//100
console.log(calculateCart(100,200,300))//100




function calculateCart2(...num1){
  return num1;
}
console.log(calculateCart2(100))//100
console.log(calculateCart2(100,200,300))//100,200,300


function calculateCart3(val1,val2,...num1){
  return num1;
}
console.log(calculateCart3(100))//100
console.log(calculateCart3(100,200,300,400))//200,300


//passing and object in function

let user={
  username:" Anjan Kumar Das",
  age:22,
};
function userDetails(anyobject){
console.log(`the user name is ${user.username} and  his age is ${user.age}`)
}
userDetails(user)


//or manually

function userDetails(anyobject){
  console.log(`the user name is ${anyobject.username} and  his age is ${anyobject.age}`)
  }

userDetails({
  username:"Anjan",
  age:22,
})




//passing an array 

const myArrr=[1,2,3,4,5];
function passArr(getArr){
//returning the second index element
return getArr[2];
}
console.log(passArr(myArrr));
