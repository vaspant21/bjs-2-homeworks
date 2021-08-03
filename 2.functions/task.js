// Задание 1
function getArrayParams (arr) {
    let min = Infinity;
    let max = -Infinity;
    let sum = 0;

    for (let i = 0; i < arr.lenght; i++) {
       let value = arr[i];
        max = max < value ? value : max;
        min = min > value ? value : min;
        sum += value;
    };
    
    return {'max': max, 'min': min, 'avg': sum / arr.lenght}
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
