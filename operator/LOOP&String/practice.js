//GAME
/*create a game where you start with any random game number .Ask the user to keep guessing the game number untill the user enter correct value
 let gameNum=20;
 let userInput=prompt("Guess a number:");
 while(userInput!=gameNum){
     userInput=prompt("you enter wrong number,try again");
 }
 console.log("congratulation you guess right number");  */   


/*Q2:print all the even number between 1 - 100

 for(let num=2;num<=100;num++){
     if(num%2===0){
        console.log(num)
     }
 }*/

/*STRING

 let str="Anjan";
 console.log("the length of the string is:",str.length);
console.log(str[0]);*/

/*STRING TEMPLET

let obj={
     item:"pen",
     price:10,
 };
 console.log("the cost of the ",obj.item,"is",obj.price,"rupees");
 console.log(`the cost of the ${obj.item} is ${obj.price} rupees`);*/



/*Escape Character
// console.log("Anjan kumar \n das")
console.log("Anjan \t kumar\tdas")*/

/*Question:

prompt the user to enter their full name.Generate a username for them based on the Input.Start username with @,followed by their full name and ending with full name length.
eg:user name="anjankumardas",username should be"@anjankumardas13"*/

let fullName=prompt("enter your name without white space");
let userName="@"+ fullName+fullName.length;
console.log("the userName will be:",userName)