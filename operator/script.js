
console.log("Jay Shree RAM")
console.log("anjan")
/*Arithmatic operator/let a=5;
let b=2 ;
 console.log("a=",a,"b=",b)
 console.log("a+b=",a+b)
 console.log("a-b=",a-b)
 console.log("a*b=",a*b)
 console.log("a/b=",a/b)
 console.log("a%b=",a%b)
 exponential
 console.log("a**b=",a**b)//means 5^2 that is 25  */

/*Unary operator
 let a=5;
 let b=2 ;
 console.log("a=",a,"b=",b)
 console.log(a++)
 console.log(a)
 console.log(a++)*/

/*Assignment operator
 let a=10;
 let b=9;
 a+=4;//a=a+4;
 console.log("a=",a)
 b**=3;//9*9*9
 console.log("b=",b)*/

/*Comparisional oerator
 let a=8;
 let b="8";// if here i will take ..let b="7",then it is a string now ,js will convert it into number then calculate it
 console.log("a==b: is",a==b)//op:false
 console.log("a!=b is:",a!=b)
 console.log("a===b: ",a===b)
 */

/*logical operator

 let a=9;
 let b=8;
 let con1=a===9;
let con2=a>b;
 console.log("con1 && con2:",con1&&con2);
console.log("con1 && con2:",con1 || con2);
console.log("!(a>b):",!(a>b))
*/



/*conditional statement
EXAMPLE:1
 let age=13;
 if(age>18){
     console.log("eligible to vote")
 }
 else{
     console.log("you can not vote")
 }
 */

/*EXAMPLE:2
 let mode="light";
 let color;
 if(mode==="dark"){
     color="black";
     console.log(color)
 }
 if(mode==="light"){
 color="white";
 console.log(color)
 }
console.log(color)*/


/*EXAMPLE:3 even odd
let a=5;
if(a%2===0){
    console.log("even")
 }else{
     console.log("odd")
 }*/

/*EXAMPLE:4 else if
 let mode="light";
 let color;
 if(mode==="dark"){
     color="black";
 }
 else if(mode==="light"){
     color="white";

 }else if(mode==="blue"){
     color="bluish";
 }else{
     color="pink";
 }
 console.log(color)*/

/*ternary operator

let age=23;
 age>=18 ?console.log("vote"):console.log("not vote");

QUESTION:1
get a user input a number using prompt("enter a number "),check if the number is multiple of five or not

CODE
 let num=prompt("enter a number :")
 if(num%5===0){
     console.log(num,"is a multiple of five  ")
 }else{
     console.log(num,"is  not a multiple of five")
 }*/

/*QUESTION:2
write a code which can give grade to students according to their score
90-100,A
80-90,B
70-80,C
60-70,D
50-60,E
50-0,Fail

//CODE
let marks=prompt("enter your marks:")
if(marks>=90 && marks<=100)
{
    console.log("A")
}else if(marks>=80 && marks<=90){
    console.log("B");
}else if(marks>=70 && marks<=80){
    console.log("C");
}else if(marks>=60 && marks<=70){
    console.log("D");
}else if(marks>=50 && marks<=60){
    console.log("E");
}else if(marks>=0 && marks<50){
    console.log("Fail");
}else{
    console.log("the mark is not included ,sorry ")
}

*/



