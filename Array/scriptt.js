//questions:
//using normal for loop
// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let i=0;i<marks.length;i++){
//     sum=sum+marks[i];
// }
// console.log(sum)
// let avg=sum/marks.length;
// console.log("the average is:",avg)

//using for-of loop
// let marks=[83,40,82 ,81,36,88];
// let sum=0;
// for(let val of marks){
//     sum+=val;
// }
// console.log("the sum of the mark is :",sum);
// let avg=sum/marks.length;
// console.log("the average of the marks is:",avg)

//Q3"GIVEN A ARRAY HAS PRICE of five item [250,645,300,900,50]
//all item has 10% off them ,change the array to store the final price

// let item=[250,645,300,900,50];
// let offer=0;
// for(let i=0;i<item.length;i++){
//     offer=item[i]*0.1;
//     let value=item[i]-offer;
//     console.log(value);

//USING FOR OF LOOP
let items=[250,645,300,900,50];
let i=0;
for(let val of items){
    let offer=val/10;
    items[i]=items[i]-offer;
    console.log(`value after offer = ${items[i]}`);
    i++;
}






























