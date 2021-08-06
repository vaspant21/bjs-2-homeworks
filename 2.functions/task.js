// Задание 1
function getArrayParams (...arr) {
    let min = Infinity;
    let max = -Infinity;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
       let value = arr[i];
        max = max < value ? value : max;
        min = min > value ? value : min;
        sum += value;
    };
    
    return {'max': max, 'min': min, 'avg': (sum / arr.length).toFixed(0)}
 };

// Задание 2
function worker(arr) {
  let sum = 0;
  let arrItem = [0];

  for (let i = 0; i < arr.length; i++) {
     sum += arr[i]
  };
  return sum;
};

function mincer(arrOfArr, func) {
  let max = -Infinity;
  arrOfarr = [0];

  for (let i = 0; i < arrOfArr.length; i++) {
    func(arr)[i];
    if (func(arrOfArr) > max) {
      max = sum;
    };
  };
  return max;
 };
  

// Задание 3
function worker2(arr) {
  // Ваш код
}
