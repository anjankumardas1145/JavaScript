const score=400;
console.log(score)//400

const balance=new Number(100)
console.log( balance)//[Number:100]

console.log(balance.toString())
console.log(balance.toFixed(1))//decimal

//toPrecision

const hundred=1000000;
console.log(hundred.toLocaleString())//US standered ke hisab mein value sow haba
console.log(hundred.toLocaleString('en-IN'))





// ++++++++++++++MATH+++++++++

console.log(Math)//it is object contain some properties


//it return the positive value
console.log(Math.abs(-4))//4
console.log(Math.abs(4))//4

console.log(Math.round(4.6))
console.log(Math.round(4.3))

console.log(Math.ceil(4.6))
console.log(Math.round(4.6))

console.log(Math.ceil(4.6))
console.log(Math.floor(4.6))

console.log(Math.min(4,8,9))
console.log(Math.max(9,2,5,76))


//Random number
console.log(Math.random())// it always return the number bet'n 0 -1 ,where 0 inclusive and 1 is exclusive


//case 1:
         //random number bwt 10 -20 both are inclusive

         let random=Math.floor(Math.random()*(20-10+1))+10;
         console.log(random)

         //case 2:10 inclusive and 20 exclusive
         let random1=Math.floor(Math.random()*(20-10))+10;
         console.log(random1)
