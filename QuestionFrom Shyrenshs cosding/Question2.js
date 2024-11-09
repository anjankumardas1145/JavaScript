// HOw to check id an object is a array or not? provide some code

function checkArray(element){
  console.log(Array.isArray(element))
}
checkArray(['a', 'b', 'c']);//true
checkArray({});//false

//or

let arrayExample = [1, 2, 3];
let objectExample = { name: "Anjan" };

console.log(typeof arrayExample);          // "object"
console.log(typeof objectExample);         // "object"
console.log(Array.isArray(arrayExample));  // true
console.log(Array.isArray(objectExample)); // false




//when i check using typeof it will show for both,is [] and {}

console.log(typeof []); // Output: "object"
console.log(typeof {}); // Output: "object"

//for my understanding

console.log(Array.isArray([1, 2, 3]));  // true (it's an array)
console.log(Array.isArray({ a: 1 }));   // false (it's an object)
console.log(Array.isArray("hello"));    // false (it's a string)
console.log(Array.isArray(123));        // false (it's a number)
console.log(Array.isArray(undefined));  // false (undefined)
