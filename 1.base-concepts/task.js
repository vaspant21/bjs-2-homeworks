'use strict'
function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = Math.pow(b, 2) - 4 * a * c; 
    if (discriminant === 0) {
      const singleRoot = -b / (2 * a);
      arr = [singleRoot];
    } else if (discriminant > 0) {
      const rootOne = (-b + Math.sqrt(discriminant)) / (2 * a);
      const rootTwo = (-b - Math.sqrt(discriminant)) / (2 * a);
      arr = [rootOne, rootTwo];
    };
  return arr;
}; 

/* function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  
  код для задачи №2 писать здесь

  return totalAmount;
} */

function calculateTotalMortgage (creditRate, downPayment, creditAmount, payOffDate) {
  let creditBody = creditAmount - downPayment;
  let monthlyRate = (creditRate / 100 / 12);
  
  //Расчет количества месяцев
  let numOfMonths = (new Date (payOffDate) - new Date ()) / 1000 / 60 / 60 / 24 / 30.5;

  //Валидация вводимых значений аргументов
  if (!(creditRate >= 0 && typeof creditRate === "number")) {
    creditRate = `Параметр "Процентная ставка" содержит неправильное значение "test".`;
  };

  if (!(downPayment >= 0 && typeof downPayment === "number")) {
    downPayment = `Параметр "Начальный взнос" содержит неправильное значение "test".`;
  };

  if (!(creditAmount >= 0 && typeof creditAmount === "number")) {
    creditAmount = `Параметр "Общая стоимость" содержит неправильное значение "test".`;
  };

  if (!(new Date (payOffDate) >= new Date ())) {
    numOfMonths = `Ошибка! Дата погашения кредита не может предшествовать текущей дате.`;
  };

  //Расчет ежемесячных платежей
  let monthlyPayment = creditBody * (monthlyRate + (monthlyRate /(Math.pow((1 + monthlyRate), numOfMonths) - 1)));
  
  //Сумма общего долга
  let totalDebt = (monthlyPayment * numOfMonths);

  return Number(totalDebt.toFixed(2));
};