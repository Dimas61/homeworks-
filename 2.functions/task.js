function getArrayParams(...arr) {
  let min = null;
  let max = null;
  let sum = null;
  min = Math.min(...arr);
  max = Math.max(...arr);
  sum = +(arr.reduce((acc, item) => acc + item) / arr.length).toFixed(2);
  return { min: min, max: max, avg: sum };
}

function summElementsWorker(...arr) {
  return arr.reduce((acc, item) => acc + item, 0);
}

function differenceMaxMinWorker(...arr) {
  let max = arr[0];
  let min = arr[0];
  if (arr.length === 0) return 0;
  for (let i = 0; i < arr.length; i++) {
      if (max < arr[i + 1]) {
          max = arr[i + 1]
      }
      if (min > arr[i + 1]) {
          min = arr[i + 1]
      }
  }
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  if (arr.length === 0) return 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
          sumEvenElement += arr[i];
      } 
      if (arr[i] % 2 !== 0) {
          sumOddElement += arr[i];
      }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let result = 0;
  let counter = 0;
  if (arr.length === 0) return 0;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
          result += arr[i];
          counter++;
      }
  }
  return result / counter;
};

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let sum = null;
  for (let i = 0; i < arrOfArr.length; i++) {
      sum = func(...arrOfArr[i])
     if (maxWorkerResult < sum) {
      maxWorkerResult = sum
     }
  }
  return maxWorkerResult;
}
