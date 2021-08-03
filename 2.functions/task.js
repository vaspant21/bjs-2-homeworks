// Задание 1
function getArrayParams (arr) {
    let min = Infinity;
    let max = -Infinity;
    let sum;
    let avg = sum / arr.lenght;
 
    for (let i = 0; i < arr.lenght; i++) {
       let value = arr[i][i];
       max = max < value ? value : max;
       min = min > value ? value : min;
       sum[i] += value;
    };
 
    return {'max': max, 'min': min, 'avg': avg}
 };


// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max

  // Ваш кода
  // for ...
  
  return max
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
