//stack
//All primitive values are stored in stack,here we get the copy of the actual value.If wwe change anything ,the original value remain same.let's see the example

let myName="Anjan Kumar Das";
let newName=myName;
newName="Rohit Sharma";
console.log(newName);//Anjan kumar Das
console.log(myName)
//look there is no changes in actual value 


//heap:Basically it store non-primitive values values ,and here we get the reference i.e if we change anything the original value also changed

let myDetails={
  name:"Anjan Kumar Das",
  age:22,
  isMarried:false,
}
console.log(myDetails);
let yrDetails=myDetails;
console.log(yrDetails);

yrDetails.name="chatGpt";
console.log(yrDetails);
console.log(myDetails);//here the actual objet i.e myDetails is changed while i changed only in the yrDetails object




