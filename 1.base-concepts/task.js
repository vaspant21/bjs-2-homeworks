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

function getTotalMortgage(creditRate, downpayment, creditAmount, payOffDate) {
  let creditBody = creditAmount - downpayment;
  let monthlyRate = (creditRate / 100 / 12);

  // Расчет количества месяцев
  // let numOfMonths = (new Date (2022, 7, 12) - new Date ()) / 1000 / 60 / 60 / 24 / 30.5;


  //Валидация вводимых значений аргументов
  if (isNaN(creditRate)) {
    return `Параметр creditRate содержит неправильное значение "${creditRate}".`
  };
  if (isNaN(downpayment)) {
    return `Параметр downpayment содержит неправильное значение "${downpayment}".`
  };
  if (isNaN(creditAmount)) {
    return `Параметр creditAmount содержит неправильное значение "${creditAmount}".`
  };
  if (isNaN(payOffDate) || payOffDate < 0) {
    return `Параметр payOffDate содержит неправильное значение "${payOffDate}".`
  };

  payOffDate = Number(payOffDate);
  creditRate = Number(creditRate);
  downpayment = Number(downpayment);
  creditAmount = Number(creditAmount);

  //Расчет ежемесячных платежей
  let monthlyPayment = creditBody * (monthlyRate + (monthlyRate / (Math.pow((1 + monthlyRate), payOffDate) - 1)));
  // let monthlyPayment = creditBody * (monthlyRate + (monthlyRate / (Math.pow((1 + monthlyRate), numOfMonths) - 1)));

  //Сумма общего долга
  let totalDebt = (monthlyPayment * payOffDate);

  return Number(totalDebt.toFixed(2));
};

console.log(getTotalMortgage(10, 0, 50000, 12));
console.log(getTotalMortgage(10, 1000, 50000, 12));
console.log(getTotalMortgage(10, 0, 20000, 24));
console.log(getTotalMortgage(10, 1000, 20000, 24));
console.log(getTotalMortgage(10, 20000, 20000, 12));
console.log(getTotalMortgage(10, 0, 10000, 36));
console.log(getTotalMortgage(15, 0, 10000, 36));

/* function calculateTotalMortgage (creditRate, downPayment, creditAmount, payOffDate) {
  let creditBody = creditAmount - downPayment;
  let monthlyRate = (creditRate / 100 / 12);
  
  //Расчет количества месяцев
  let numOfMonths = (new Date (payOffDate) - new Date ()) / 1000 / 60 / 60 / 24 / 30.5;

  //Валидация вводимых значений аргументов
  if (!(creditRate >= 0 && typeof creditRate === "number")) {
    return `Параметр "Процентная ставка" содержит неправильное значение ${creditRate}.`
  };

  if (!(downPayment >= 0 && typeof downPayment === "number")) {
    return `Параметр "Начальный взнос" содержит неправильное значение ${downPayment}.`
  };

  if (!(creditAmount >= 0 && typeof creditAmount === "number")) {
    return `Параметр "Общая стоимость" содержит неправильное значение ${creditAmount}.`
  };

  if (!(new Date (payOffDate) >= new Date ())) {
    return `Ошибка! Дата погашения кредита не может предшествовать текущей дате.`
  };

  //Расчет ежемесячных платежей
  let monthlyPayment = creditBody * (monthlyRate + (monthlyRate /(Math.pow((1 + monthlyRate), numOfMonths) - 1)));
  
  //Сумма общего долга
  let totalDebt = (monthlyPayment * numOfMonths);

  return Number(totalDebt.toFixed(0));
};

calculateTotalMortgage(); */