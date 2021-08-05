'use strict'
function solveEquation(a, b, c) {
  let arr = [];
  const discriminant = Math.pow(b, 2) - 4 * a * c; 
    if (discriminant === 0) {
      const singleRoot = -b / (2 * a);
      arr = [singleRoot];
    } else if (discriminant > 0) {
      const rootOne = (-b - Math.sqrt(discriminant)) / (2 * a);
      const rootTwo = (-b + Math.sqrt(discriminant)) / (2 * a);
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
  let numOfMonths = (new Date (payOffDate) - new Date ()) / 1000 / 60 / 60 / 24 / 30.5;
  let totalDebt = 0;
  let monthlyPayment = creditBody * ((creditRate/100/12) + (creditRate/100/12) / (((1 + (creditRate/100/12))^numOfMonths) - 1));
  return totalDebt = (monthlyPayment * 12);
};