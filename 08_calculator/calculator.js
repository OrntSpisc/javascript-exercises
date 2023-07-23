const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum, value) => (sum += value), 0);
};

const multiply = function(...numbers) {
  return numbers.reduce((result, value) => (result * value), 1);
};

const power = function(number, power) {
  let result = number;
	for (let i = 1; i < power; i++) {
    result *= number;
  }
  return result;
};

const factorial = function(number) {
  let result = 1;
  if (number > 0) {
    result = number
  }
	for (let i = number - 1; i > 0; i--){
    result *= i;
  }
  return result;
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
