//REvERSE OF AN ARRAY:
/*function ReverseArray1(arr) {
    return arr.reverse();
  }
  
  function ReverseArray2(arr) {
    const len = arr.length;
    let i = 0;
    let j = len - 1;
    while(i < j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  
    return arr;
  }
  
  const arr1 = [1, 2, 3, 4,5, 6];
  console.log(ReverseArray2(arr1))*/


  //Find MAX and MIN  in the array

  /*function findMaxAndMin (arr) {
    let max = Number.MIN_VALUE;
    let min = Number.MAX_VALUE;
    for(let val of arr) {
      if(val > max) max = val;
      if(val < min) min = val;
    }
    return {
      max, min
    }
  }

 
  
  const arr = [1, 2, 3, 4, 5, 6];
  console.log(findMaxAndMin(arr));*/

  // //Find K'TH element

  function findKthMaxAndMin(arr, k) {
    arr.sort((a, b) => a - b);
    return {
      kthMax: arr[arr.length - k],
      kthMin: arr[k - 1]
    }
  }
  
  const arr = [1, 2, 3, 4, 5, 6, 7];
  console.log(findKthMaxAndMin(arr, 3));
