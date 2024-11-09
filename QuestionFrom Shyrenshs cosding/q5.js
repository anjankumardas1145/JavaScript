//Make it work
//duplicate ([1,2,3,4,5]);// [1,2,3,4,5,1,2,3,4,5]

function duplicate(array){
  let result = array.concat(array);
  return result;
}
console.log(duplicate([1,2,3,4,5]));

//or

let a=[1,2,3,4 ,5];
console.log(a.concat(a))