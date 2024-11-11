function palindrome(str){
  
  let reversedStr = str.split("").reverse().join("");
  return str===reversedStr ;
}
 console.log(palindrome("Anjan"));
 
 // Binary search
 function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2


//q3:swapiing of two number in js
function swap(a, b) {
b=a+b;
a=b-a;
b=b-a;
return {a,b}
}
console.log(swap(1,2));

//fibonacci
function fibonacci(limit) {
  let sequence = [0, 1];
  while (true) {
    let next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    if (next > limit) break;
    sequence.push(next);
  }
  return sequence;
}
console.log(fibonacci(21)); // [0, 1, 1, 2, 3, 5, 8, 13, 21]


//Power of a number without power method

function power(base, exponent) {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
}
console.log(power(2, 3)); // 8


//example of clouser
function out(){
  let a=10;
  function test(){
    console.log(a);
  }
  return test;
}
const result=out();
result();


console.log(greet); // Output: undefined
 // TypeError: greet is not a function

var greet = function() {
  console.log("Hello!");
};