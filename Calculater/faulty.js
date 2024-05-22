/*create a faulty calculater using javascript

//this faulty calcuter does following :
1:it takes two number as input from the
2:it performs wrong operation as follows:


+ --->-
* --->+
- --->/
/ --->**

it perform wrong operation 10% of Time
*/

let random=Math.random();
console.log(random)
let a=prompt("enter first number:");
let b=prompt("enter second number:");
let c=prompt("enter the operation:");
let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**",
};
//console.log(random);
if(random>0.1){
    //perform correct calculatio
    console.log(`the result is ${a} ${c} ${b}`);
    alert(`the result is ${eval (`${a} ${c} ${b}`)}`)
}
else{
    // perform wrong operation
    c=obj[c]
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}
