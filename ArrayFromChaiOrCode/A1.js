const batsMen=["Rohit","Virat","Rahul"];
const bowler=["Akash","Siraj"," Reddy"];
// console.log(batsMen.push(bowler));//Here bowler array acts as an single value ,the value is a index number 3 okk
// console.log(batsMen);
// console.log(batsMen[3]);
// console.log(batsMen[3][1]);

console.log("Ankita")

const players=batsMen.concat(bowler);//concat returns a new array properly
console.log(players)

//Spread operator (...)
// Spread operator is more modern and versatile.
// concat() can only combine arrays, whereas the spread operator can work with function arguments and objects as well.
const squad = [...batsMen, ...bowler];
console.log(squad);


//flat

const arr3=[1,2,3,[4,5,6],4,5,[7,5],[3,4,[5,6]]];
const resultArr=arr3.flat(Infinity);
console.log(resultArr)

console.log(Array.isArray("Virat kohli"));
console.log(Array.from("Ankita"))
