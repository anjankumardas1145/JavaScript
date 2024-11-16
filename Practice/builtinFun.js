let arr=[1,2,3,4];
let mapp=arr.map(num=>num*num);
console.log(mapp)
let fil=arr.filter(num=>num%2==0);

console.log(fil)
let red=arr.reduce((acc,num)=>(acc+num),0);
console.log(red);