# ES6 (2015)
1.let and const:Block scope variable and constant declarations.

# 2.Arrow function
:Shorter function syntax and lexical this binding.
**Ex**:
const add=(a,b)=>a+b;
console.log(add(a,b))

# 4.Template literals
:String interpolation and multi-line string.
**ex**:let name="Anjan";
let age=22;
console.log(` his name is ${name},and his age is ${age})

# 5.Defult parameter
   :function parameter with defult value
   **ex**:
   function welcome(name=="anjan"){
    return `hello ${name}`
   }
   console.log(welcome())

  # 6 .Destructiong Assignment:
  unpack value from an array
  ex:
  let [a,b]=[1,2];
  console.log(a)//1
  console.log(b);//2
  **for object**:
  let {name,age}={name:"Anjan",age:22}
  console.log(name);Anjan
  console.log(age);22


  # 7 .rest and spread operator
   **rest**:collect the value or The rest operator is used in function parameters to collect the rest paremeters to collect all remaining argument into an array.
   example:
   let :function display(one,two,three,...rest){
    console.log(one)
    console.log(two);
    console.log(three);
    console.log(rest);
   }
   display(1,2,3,4,5,5,6,7,7)

   **rest**:rest operator always return array

   # 7 .class concept: for object oriented programming
    class Person{
      person(name,age){
        name.this=name;
        age.this=age;
      }
      greet(){
        return `hello my name is ${this.name}`
      }
    }
    const person=new Person("Anjan")
    console.log(person.greet())

# 8.promise
Basically promise is a object in js.used to manage asyncronomous opertion in js,it reresents eventual completion (it might be completion or failure of a asynic opreation),
there are three stage :
pending
fullfill
reject
**function in promise:**
then():when promise is fullfilled then it call
catch():when the promise is rejected
finally():when the promise is settled ,either completed ar failure

# 9 .Module: import and expot statement for modular code.

# 10:enhanced object literal:
   shothand properties and method.
    **ex**: let name="anjan";
    let myDetails={
      name,
      greet(){
        return `Hi, I am ${this.name}`
      }
    };
    console.log(myDetail.greet())


 # 11. iterator and generator function
 to return multiple value and custum iteration.
 ...it can be paused and resumed
 ...yield key word is used to pause the function and retun the value.
 next() method used to resume execution.

 # map and set:
 map collect the key value pair
 set sets  unique value



   # +++++++++++++++ECMAScript 2016 (ES7)

 # 1.Exponential operator(**)
 console.log(3**4)

 # 2.Array.prototype.includes:
 checks if an array include certain value.
 **Ex**:console.log([1,2,3,4].includes(2)) ;



 # ++++++++++++++++++++ECMAScript 2017(ES8)

# Asynic/Await

# String padding:padStart and padEnd method for dtring

**ex**:
console.log('5'.padStart(3, '0')); // Output: '005'
console.log('5'.padEnd(3, '0'));   // Output: '500'



#   ++++++ ECMAScript 2018 (ES9)

**Asynchronous Iteration: For awaiting Promises in loops.**


Ex:
async function processArray(array) {
    for await (let item of array) {
        console.log(item);
    }
}

processArray([1, 2, 3]);

**Promise.prototype.finally: Allows code to be run after a Promise is settled.**
ex:
promise.finally(() => {
    console.log('Promise is settled (resolved or rejected).');
});


**Rest/Spread Properties: Used with objects.** 


#









     


