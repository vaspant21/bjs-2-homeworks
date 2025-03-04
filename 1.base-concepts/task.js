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

function calculateTotalMortgage(creditRate, downpayment, creditAmount, payOffDate) {

  let creditBody = creditAmount - downpayment;
  let monthlyRate = (creditRate / 100 / 12);

  let numOfmonths = payOffDate.getMonth() - new Date().getMonth() +
    (12 * (payOffDate.getFullYear() - new Date().getFullYear()));

  //Валидация вводимых значений аргументов
  if (isNaN(creditRate) || creditRate < 0) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${creditRate}"`
  };
  if (isNaN(downpayment) || downpayment < 0) {
    return `Параметр "Начальный взнос" содержит неправильное значение "${downpayment}"`
  };
  if (isNaN(creditAmount) || creditAmount < 0) {
    return `Параметр "Общая стоимость" содержит неправильное значение "${creditAmount}"`
  };
  if (isNaN(payOffDate) | payOffDate < 0) {
    return `Параметр "Срок" содержит неправильное значение "${payOffDate}"`
  };

  payOffDate = Number(payOffDate);
  creditRate = Number(creditRate);
  downpayment = Number(downpayment);
  creditAmount = Number(creditAmount);

  new Date(payOffDate).getMonth - new Date().getMonth;

  //Расчет ежемесячных платежей
  let monthlyPayment = creditBody * (monthlyRate + (monthlyRate / (Math.pow((1 + monthlyRate), numOfmonths) - 1)));

  //Сумма общего долга
  let totalDebt = (monthlyPayment * numOfmonths);

  return Number(totalDebt.toFixed(2));
};