//const tinderUser=new Object()//this is a singleton object
const tinderUser={} //this is a non singleTon Object
tinderUser.id="11";
tinderUser.name="Anjan";
tinderUser.isMarried=false;
console.log(tinderUser)

// nested object
const regularUser={
   fullname:{
firstName:"Anjan",
lastName:"Das"
  }
}
console.log(regularUser.fullname.lastName)




//
const obj={1:"a",2:"b"}
  const obj1={2:"c",3:"d"}
const obj2={5:"e",6:"f"}
const resultObj=Object.assign({},obj,obj1,obj2)
//using spread
const resultObj1={...obj,...obj1,...obj2}
console.log(resultObj1)
console.log(resultObj)

//Array Object
const user=[
{
  id:1,
  email:"anjan@gamil.com"
},
{

},
{

},

]
console.log(user[0].email)

//
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
