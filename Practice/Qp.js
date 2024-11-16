function isArmstrong(number) {
  let numStr = number.toString();           // Convert number to string
  let length = numStr.length;               // Get the number of digits
  let sum = 0;
  
  for (let i = 0; i < length; i++) {
      sum += Math.pow(Number(numStr[i]), length);  // Sum of digits raised to the power of the number of digits
  }
  
  return sum === number;  // If sum equals the original number, it's an Armstrong number
}

console.log(isArmstrong(153));  // Example: 153 is an Armstrong number
console.log(isArmstrong(123));  // Example: 123 is NOT an Armstrong number




//Fibonacci series

function fibo(number) {
  let first = 0, second = 1, next;
  
  for (let i = 0; i < number; i++) {
      console.log(first);  // Print the current Fibonacci number
      next = first + second;  // Calculate the next number
      first = second;         // Update first to the next number in sequence
      second = next;          // Update second to the next number in sequence
  }
}

fibo(10); // Example: Prints the first 10 Fibonacci numbers


//isPrime(10); //

function isPrime(number){
  if(number<=1){
      return false;
  }
  for(let i=2;i<=Math.sqrt(number);i++){
      if(number%i===0){
          return false;
          
      }
      
  }
  return true;
}
console.log(isPrime(78))




//Bobble sort
function bbl(arr){
  for(let i=0;i<arr.length-1;i++){
      for(let j=0;j<arr.length-i-1;j++){
          if(arr[j]>arr[j+1]){
              [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
          }
      }
  }
  return arr;
}
console.log(bbl([4,3,2,1]))



//binary search

console.log("Try programiz.pro");
function binarySearch(arr,target){
    let start=0;
    let end=arr.length-1;
while(start<end){
    let mid=Math.floor((start+end)/2);
    if(target===arr[mid]){
    return mid;
}
 if(target>mid){
    start=mid+1;
}
else {
    end=mid-1;
}


}
return -1;
}
let result=binarySearch([1,3,4,5,6,8],6);
if(result!==-1){
    console.log(`The element found at ${result} `);
}else{
    console.log("The element not found")
}
