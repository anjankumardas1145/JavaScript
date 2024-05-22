// let cricketers=["Rohit","Virat","YUVRAJ","Raina"];
// console.log(cricketers)
// console.log(cricketers[3]);

//LOOPING OVER A array

// let cricketers=["Rohit","Virat","YUVRAJ","Raina"];
// for(let i=0;i<cricketers.length;i++){
//     console.log(cricketers[i]);
// }


//for-of loop
// let cricketers=["Rohit","Virat","YUVRAJ","Raina"];
// for(let name of cricketers){
//     console.log(name);
// }


//METHOD IN JS
//push():Add to end
// let name=["Rohit","Virat","Ritika","Anushka"];
// console.log(name);
// name.push("Samaira");
// console.log(name)
// //pop():delete from the end and retutn
// console.log(name.pop());
// console.log(name)
// //slice():return a peace of array
// console.log(name.slice(1,3))


//splice method:change original array (add,remove,replace)
//splice(startIndex,delCount,newELEment)
let num=[1,2,3,4,5,6,7,8];
//console.log(num.splice(2,2,101,102))//delete and then insert 
//console.log(num)
//ADD element
//console.log(num.splice(2,0,102));
//  console.log(num)

//Delete element
//  console.log(num.splice(3,1))//means index number three kai pass jao and  one number ko delete kar do
//console.log(num)
//REplace 
/*console.log(num.splice(3,1,109))
//means index three ka pass jao the one numbe ko delete karbado //and 109 iss jagaha par rakh do///
console.log(num)*/


