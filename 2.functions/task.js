'use strict'


//--------------TASK 1--------------
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]
    }
    if (arr[i] > max) {
      max = arr[i]
    }
    sum += arr[i]
  }

  return {
    min,
    max,
    avg: Number((sum / arr.length).toFixed(2))
  }; // Shorthand for {min: min, max: max, avg: avg};
}

console.log(getArrayParams([-99, 99, 10])) // { min: -99, max: 99, avg: `3.33` }
console.log(getArrayParams([1, 2, 3, -100, 10])) // { min: -100, max: 10, avg: `-16.80` }


//--------------TASK 2--------------
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const element = arrOfArr[i];
    const arrMax = func(element); 
    // console.log(element, func(element));
    if (arrMax > max) {
      max = arrMax;
    }
  }
  return max;
}

//worker
let arrOfArr = [[1, 2, 3], [4, 5, 6]];
console.log(makeWork(arrOfArr, worker)); // 15

arrOfArr = [[10, 10, 11], [20, 10]];
console.log(makeWork(arrOfArr, worker)); // 31

arrOfArr = [[0, 0, 0], [-1, -100]];
console.log(makeWork(arrOfArr, worker)); // 0


//--------------TASK 3--------------
function worker2(arr) {
  const {
    min,
    max
  } = getArrayParams(arr);
  return max - min; 

  // const result = getArrayParams(arr);
  // const min = result.min;
  // const max = result.max;
}

//worker2
arrOfArr = [[-10, -20, -40], [10, 20, 30]];
console.log(makeWork(arrOfArr, worker2)); // 30

arrOfArr = [[0, 0, 0], [-1, -99]];
console.log(makeWork(arrOfArr, worker2)); // 98