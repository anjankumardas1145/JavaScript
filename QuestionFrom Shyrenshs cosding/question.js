let str="Anjan kumar Das";
let savedStr=str.split(" ").map(function(Word){
  return str.split("").reverse().join("")
});

console.log(savedStr.join(" "));

or
// let str = "Anjan kumar Das";

// // Step 1: Split the sentence into words
// let savedStr = str.split(" ")

//   // Step 2: Reverse each word
//   .map(word => word.split("").reverse().join(""))

//   // Step 3: Join the reversed words back into a sentence
//   .join(" ");

// console.log(savedStr);  // Output: "najnA ramuk saD"





