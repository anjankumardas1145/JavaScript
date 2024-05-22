// var age=34;
// var age=90;
// var age=76;
// console.log(age)
 var aage=34;
// {
//     let age=90;
// age=78;
// console.log(age);
// }
// let age=98;
// console.log(age);
// const a=9;
// console.log(a)

//Data types
//number
let age=90;
console.log(typeof age)
//string
let name="Anjan";
console.log(typeof name)
//boolean
let isFollow=true;
console.log(typeof isFollow)
//undefind
let a;
console.log(a)
console.log(typeof a)
//null
let x=null;
console.log(x)
console.log(typeof x)
//bigint
let y=BigInt("1234");
console.log(y)
console.log(typeof y)
//symbol
let c=Symbol("Anjan")
console.log(c)
console.log(typeof c)

//creation of object
const student={
    name:"Anjan",
    age:22,
    marks:410,
    cgpa:7.5,
    isPass:true,
};
console.log(student)
console.log(student.marks)
console.log(student.name)
console.log(typeof student)
//how to change the value of an object
student["age"]=student["age"]+1;
console.log(student.age)
student["name"]="Ranjan Kumar Das";
console.log(student.name)

//creating a object profile of my linkedin profile

const profile={
    name:"anjankumardas",
    followers:288,
    following:289,
    post:40,
};
console.log(profile)
console.log(profile.name)
console.log(profile["name"])

