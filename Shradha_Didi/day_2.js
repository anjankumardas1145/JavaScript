console.log( "Jay shree RAM")
// Arithmatic operator

// let a=10;
// let b=5;
// console.log("a+b:",a+b);
// console.log("a-b: ",a-b);
// console.log("a*b:",a*b);
// console.log("a/b:",a/b);
// console.log("a%b:",a%b);
// console.log("2**3:",2**3);

//unary operator

// let a=10;
//  let b=5;
//  console.log("a=",a,"b=",b);
//  a++;
//  console.log("a :",a)
//  a--;
//  console.log("a :",a)


 //ASIGNMENT OP IN JS

//  let a=5;
//  let b=2;
//  a+=5;// this means: a=a+5
//  console.log("a :" ,a);

 //COMPARISION OP IN JS
// let a=8;
// let b=5;
// console.log("a!=b :",a!=b);
// console.log("a==b :",a==b);
// //strict comparision
// let c=5;
// let d="5";
// console.log("c==d ",c==d);//it will only check the value so first " d" convert into number then it return true
// console.log("c===d",c===d);// it will check the value as well s its type so c is Number and d is String so it will return false



// //Logical operator
//   //AND(&&) T && T=T this case is always true otherwise always false
//       let a=3;
//       let b=4;
//       let case1=a>b;//F
//       let case2=b>a;//T
//       console.log("case1 && case2 ",case1&&case2);
//   //OR(||) F || F= F this case is always false otherwise always true
//       console.log("case1 || case2 :",case1||case2);


//       //NOT
//       console.log("a!=b ",a!=b);
                                      //CONDITIONAL STATEMENT
//ELIGIBLE TO VOTE OR NOT 
                  // let age=prompt(" enter the age");
                  //       if(age>=18){
                  //        console.log("Eligible to vote .")
                  //   }else{
                  //     console.log("Not eligible to vote")
                  //                }
//ex:2
// let mode=" dark";
// let Color;
// if(mode==="dark"){
//   Color="black";
// }else{
//   Color="orange";
// }

// console.log("color is : ",Color)


                              //EX:Even 0dd
                              // let num=prompt("Enter a number:");
                              // if(num%2==0){
                              //   console.log(num ," is even number.")
                              // }else{
                              //   console.log(num ," This is an odd number.")
                              // }
  // else if
//   let mode=" black";
//   let setColor;
//   if(mode==="dark"){
//     setColor="black";
//   }else if(mode==="blue"){
//           setColor="blue";
//         }else if(mode==="pink"){
//           setColor="pink";
//         }
// else{
//   setColor=" green";

// }
// console.log(setColor)

                                  //TERNARY OP:
                                  // let age=18;
                                  // let result=age>18?"adult":"not adult";
                                  // let result1=age>18?console.log("adult"):console.log("not adult")
                                  // console.log(result)



                                  // //Q:1 check this number is multiple of 5 or not
                                  // let number=prompt("Enter a number");
                                  // if(number%5==0){
                                  //   console.log(number ," is multiple of 5");
                                  // }else{
                                  //   console.log(number ," is not a multiple of 5")
                                  // }
    //Q:2 Grading using if else
                let marks=prompt("enter the marks:")  ;
                if(marks>=90 && marks<=100){
                  console.log("A");
                }     else if(marks>=70 && marks<=89)    {
                  console.log("B")
                }   else  if(marks>=60 && marks<=69)   {
                  console.log("C")
                  
                }  else if(marks>=50 && marks<=59){
                  console.log("D")
                }
                else if(marks>=0 && marks<=49){
                  console.log("Fail");
                }