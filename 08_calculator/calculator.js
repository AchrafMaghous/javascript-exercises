const add = function(num1, num2) {
  return (num1 + num2)
};

const subtract = function() {
  return (num1 - num2)
};

const sum = function (array) {
  let res = 0;
  for (let i = 0; i < array.length; i++) {
    res += array[i];
  }
  return res;
};

const multiply = function(array) {
  let res = 1;
  for (let i = 0; i < array.length; i++) {
    res *= array[i];
  }
  return res;
};

const power = function (num1, num2) {
  if (num1 != 0 && num2 === 0)
    return 1
  let res = 1;
  for (let i = 0; i < num2; i++) {
    res *= num1;
  }
  return res;
};

const factorial = function (num) {
  let res = 1;
  if (num === 0)
    return 1;
  for (let i = 1; i <= num; ++i) {
    res *= i;
  }
  return res
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
