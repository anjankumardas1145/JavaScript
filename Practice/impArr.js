console.log("reverse an array")
function reversedArray(arr){
    let reversed=[];
    for(let i=arr.length-1;i>=0;i--){
        reversed[reversed.length]=arr[i];
    }
    return reversed;
}
let arr=[1,2,3,4,5];
console.log(reversedArray(arr))

console.log("find greatest and smallest")
//find largest
function findGreatest(arr){
    let largest=arr[0];
    let smallest=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i];
        }
        if(arr[i]<smallest){
            smallest=arr[i];
        }
    }
    return `Smallest element is: ${smallest} and largest is: ${largest}`
}
let arr2=[11,07,18,45];
console.log(findGreatest(arr2))


//check sorted or not
console.log("check the array is sorted or not")
function isSorted(arr3){
    for(let i=1;i<arr3.length;i++){
        if(arr3[i]<arr3[i-1]){
            return false;
        }
    }
    return true;
}
let arr3=[3,4,5,6]
console.log(isSorted(arr3))

console.log("Unique element in the array")
//FIND unique element in the array
function findUnique(arr4){
    for(let i=0;i<arr4.length;i++){
        for(let j=i+1;j<arr4.length;j++){
            if(arr4[i]===arr4[j]){
                arr4[i]=-1;
                arr4[j]=-1;
                
            }
        }
    }
    let ans=-1;
    for(let i=0;i<arr4.length;i++){
        if(arr4[i]>0){
           ans=arr4[i];
        console.log(ans);
        break;  
        }
       
    }
    if(ans===-1){
        console.log(ans)
    }
}
findUnique([1,2,2,3,3,,4,1]);


//prefix sum
console.log("prefix sum")
function prefixSum(arr5){
    let resultArr=[];
    resultArr[0]=arr5[0];
    for(let i=1;i<arr5.length;i++){
        resultArr[i]=resultArr[i-1]+arr5[i];
    }
    return resultArr;
}

function printArr(abc){
    let result=[];
    for(let i=0;i<abc.length;i++){
        result=result+abc[i]+" ";
    }
    console.log(result)
}

let output=prefixSum([1,2,3,4,5]);
printArr(output);

console.log("bubble sort")

function bblSort(arr6){
    for(let i=0;i<arr6.length-1;i++){
        for(let j=0;j<arr6.length-1-i;j++){
            if(arr6[j]>arr6[j+1]){
                [arr6[j],arr6[j+1]]=[arr6[j+1],arr6[j]]
            }
        }
    }
    return arr6;
}
console.log(bblSort([1,3,2.4,2]))

console.log("chaeck palindrome number :")
function palindrome(number){
    let temp=number;
    let rev=0;
    while(number>0){
        let rem=number%10;
        rev=rev*10+rem;
        number=Math.floor(number/10);
    }
    return temp===rev;
}
console.log(palindrome(212))
console.log(palindrome(234))

console.log("reverse number")
function reverseNumber(num){
    let rev=0;
    while(num>0){
        let rem=num%10;
        rev=rev*10+rem;
        num=Math.floor(num/10);
    }
    return rev;
}
console.log(reverseNumber(1234));

//string 


console.log("Try programiz.pro");
function reverse(name){
    let rev=" ";
    for(let i=name.length-1;i>=0;i--){
        rev=rev+name[i];
    }
    return rev;
}
console.log(reverse("Ankita Mam"))


//count vowel in a string

function countVowel(stringg){
    let vowel=0;
    for(let i=0;i<stringg.length;i++){
        let char=stringg[i].toUpperCase();
        if(char=='A' || char=='E' || char=='I' || char=='O' || char=='U'){
            vowel++;
        }
    }
    return vowel;
}
console.log("Vowel in Ankita is :" ,+countVowel("Ankita Mam"))


// check palindrom string

function checkPalinDrome(namee){
    let start=0;
    let end=namee.length -1;
    while(start<end){
        if(namee[start]!==namee[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
}
console.log(checkPalinDrome("Ankita Mam"))


//count the vowel and consonamt in a string
