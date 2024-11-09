//reverse a number

function reverse(number){
  let reversed = 0;
  while (number > 0) {
    reversed = reversed * 10 + number % 10;
    number = Math.floor(number / 10);
  }
  return reversed;
}

console.log(reverse(123));

//or

let a=1234;
console.log(a.toString().split("").reverse().join(""))// here althrough it look like a number but actually it is a string '1234'

//or

function rev(number){
  //number.toString().split("").reverse().join("") basically this is a string so we put it into a : Number(number.toString().split("").reverse().join(""))
 return Number(number.toString().split("").reverse().join(""))
}
console.log(rev(1145));