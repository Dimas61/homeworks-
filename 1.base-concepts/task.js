"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let x1, x2;
  const D = Math.pow(b, 2) - 4 * a * c;

  if (D < 0) {
    return [];

  } else if (D === 0) {
    x1 = -b  / (2 * a);
    arr.push(x1);

  } else if (D > 0) {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
    arr.push(x1);
    arr.push(x2);
  }
  return arr;
};



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let newPercent = percent / 100 / 12;
  let totalAmount = amount - contribution;
  let result = totalAmount * (newPercent + (newPercent / (((1 + newPercent) ** countMonths) - 1)));
  return +(result * countMonths).toFixed(2);
}