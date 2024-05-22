// console.log("Jay Shree Ram")
// //function in js
// function sum(a,b){
//     s=a+b;
//     return s;
// }
// let ans=sum(3,5);
// console.log("the sum of the number is:",ans)


/*//Arrow function
 const arrowSum=(a,b)=>{
     console.log(a*b);
 }
arrowSum(3,4);*/

/* const arrowmul=(p,q)=>{
     return p*q;
 }
 let result=arrowmul(8,7);
console.log(result)*/

/*create a function using the "function" keyword that  takes a string as an argument and return the number of vowel in the string

IT SHOWS ERROR CHECK IT LATER
 let str="anjan";
 function countVowel(str) {
   let count = 0;
   for (const charr of str) {
     if (
       charr =="a" ||
       charr == "e" ||
       charr == "i" ||
       charr == "o" ||
       charr == "u"
     ) {
      count++;
     }
   }
  console.log(count);
  //document.write(count)
 }
*/
/*CHANDAN ANS
  let ab=prompt("enter your name");
 function CheckVowel(){
   let vowel=0;
  for(let i of ab){
    if(i=='a'|| i=='e' || i=='i' || i=='o' ||i=='u'){       vowel++;    
     }
  }
  document.write(vowel);
}*/

/*arrEach Loop
 let arr=[1,2,3,4,5];
 arr.forEach((val)=>{
   console.log(val);
 })*/


////THREE PARAMETER CAN BE USED AS THREE TYPES[VAL,INDEX,ARRAY]

//  let arr=["anjan","ranjna","swadhin","satyajit"];
//  arr.forEach((val,index,arr)=>{
// console.log(val,index,arr);
//  })

//Q1:FOR A GIVEN ARRAY NUMBER ,print the squre of each value using the forEach loop

/* let num=[1,2,3,4,5];
 num.forEach((val)=>{
console.log(val*val);}
 )
*/
/*normal array 
 let arr=[2,3,4,5,6];
 for(let i=0;i<arr.length;i++){
   let ans=arr[i]*arr[i];
   console.log(ans);
 }*/


//MAP Function

/*store the array in an another array
 let arr=[1,2,3,4];
 let newArr=arr.map((val)=>{
  return val*2;
 })
console.log(newArr);
 just print the value using map method
let num=[2,3,4,55];
 num.map((val)=>{
   console.log(val)
 })*/

/*FILTER METHOD
 let arr=[2,3,4,5,7,7,8];
 let evenArr=arr.filter((val)=>{
   return val%2===0;
 })
 console.log(evenArr);
 let result=0;
 let num=[2,3,4,6];
 num.filter((val)=>{
    result=val%2===0;
 console.log(result);
})*/


//REDUCE METHOD

/*sum
 let arr=[3,4,5,6,7];
 const output=arr.reduce((prev,current)=>{
   return prev+current;
 })
 console.log("sum of the array is:",output)

 /*greatest in the array
 let num=[3,5,60,2,4,22];
 const result=num.reduce((prev,current)=>{
  return prev>current?prev:current;
 })
console.log("the largest number in the array:",result);*/



/*filter the marks greater then 90+


let num=[30,69,99,98,98,78];
 let bstStudent=num.filter((val)=>{
   return val>90;
 })
 console.log(bstStudent);*/


// let n=prompt("enter a number:");
console.log("Jay jagannath")


//look how function work
function printName(name) {
    console.log("Hey "+name+" you are nice" );
    console.log("hey "+name+" your learning style is good");
    console.log("byy "+ name+" good night");
    
}
printName("Anjan")
console.log("look only one function used for multiple times how");
printName("Ranjan")