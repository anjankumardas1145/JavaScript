const myDetails={
  name:"Anjan",
  age:-22,
  "full_name":"Anjan Kumar Das",
  email:"email@gmail.com",
  location:"pakistan",
  lastLogin:["monday","friday","sundaay"]
}
console.log(myDetails)
console.log(myDetails.age)//this is correct 
//console.log(myDetails[age])//this line will show error
console.log(myDetails["age"])//it is always recommended
console.log(myDetails["full name"])// Recommended
//console.log(myDetails.full name)//not possibe to access  the value like this so always  


// modify details
myDetails.full_name="Ranjan Kumar Das";
console.log(myDetails)

//if i want that nobody can not change anything then we use 
//Object.freeze(myDetails)
myDetails.email="anjan@gmail.com";
myDetails.greeting=function(){
  console.log("Hello Anjan")
}
myDetails.greetTwo=function(){
  console.log(`hello ji good morning ${this.age}`)
  }
console.log(myDetails)
console.log(myDetails.greeting())//undefind
console.log(myDetails.greeting)//function(anonymou)
console.log(myDetails.greetTwo())