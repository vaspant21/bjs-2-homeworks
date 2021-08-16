'use strict'

//--------------TASK 1--------------

function compareArrays(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }
  return arr1.every((element, index) => element === arr2[index])
}

console.log(compareArrays([8, 9], [6])) // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])) // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])) // false), разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])) // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])) // true

//--------------TASK 2--------------
function advancedFilter(numbers) {
  return numbers.filter(num => num > 0 && num % 3 === 0).map(num => num * 10);
}

console.log(advancedFilter([-1, 6, -9, 3])); // [60,30]
console.log(advancedFilter([-10, -21, 12, 123])); // [120, 1230]
console.log(advancedFilter([-1, -2])); //) []