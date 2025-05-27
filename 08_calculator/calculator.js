const add = function(a,b) {
	return a + b
};
console.log(add(5,9));


const subtract = function(a,b) {
	return a-b
};
console.log(subtract(-8,7));

const sum = function(arr) {
	return arr.reduce((acc,curr) => acc + curr ,0)
};
console.log(sum([1, 3, 5, 7, 9]));

const multiply = function(arr) {
  return arr.reduce((acc,curr) => acc * curr )
};
console.log(multiply([2, 4, 6, 8, 10, 12, 14]));


const power = function(arr) {
  return arr.reduce((acc,curr) => acc ** curr )
};
console.log(power([3,10]));

const factorial = function(n) {
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};
console.log(factorial(1));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
