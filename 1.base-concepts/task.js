'use strict'

//TASK 1
function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = Math.pow(b, 2) - 4 * a * c;
if (discriminant === 0) {
    let x = -b / (2 * a);
    arr = [x];
  } else if (discriminant > 0) {
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr = [x1, x2];
  }
  return arr;
};

//TASK 2

function calcualteTotalMortgage(creditRate, downpayment, creditAmount, payOffDate) {
  let creditBody = creditAmount - downpayment;
  let monthlyRate = (creditRate / 100 / 12);

  //Валидация вводимых значений аргументов
  if (isNaN(creditRate) && creditRate < 0) {
    return `Параметр creditRate содержит неправильное значение "${creditRate}".`
  };
  if (isNaN(downpayment) && downpayment < 0) {
    return `Параметр downpayment содержит неправильное значение "${downpayment}".`
  };
  if (isNaN(creditAmount) && creditAmount < 0) {
    return `Параметр creditAmount содержит неправильное значение "${creditAmount}".`
  };
  if (isNaN(payOffDate) && payOffDate < 0) {
    return `Параметр payOffDate содержит неправильное значение "${payOffDate}".`
  };

  payOffDate = Number(payOffDate);
  creditRate = Number(creditRate);
  downpayment = Number(downpayment);
  creditAmount = Number(creditAmount);

  //Расчет ежемесячных платежей
  let monthlyPayment = creditBody * (monthlyRate + (monthlyRate / (Math.pow((1 + monthlyRate), payOffDate) - 1)));

  //Сумма общего долга
  let totalDebt = (monthlyPayment * payOffDate);

  return Number(totalDebt.toFixed(2));
};

console.log(calcualteTotalMortgage(10, 0, 50000, 12)
);