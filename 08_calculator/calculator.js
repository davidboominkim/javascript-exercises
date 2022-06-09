const add = function(a, b) {
  return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
  let sum = 0;
  for (const num of arr){
    if (typeof num != "number") continue;
    sum += num;
  }
  return sum;
};

const multiply = function(arr) {
  let sum = 1;
  for (const num of arr){
    if (typeof num != "number") continue;
    sum *= num;
  }
  return sum;
};

const power = function(a, b) {
	let num = 1;
  while (b > 0) {
    num *= a;
    b--;
  }
  return num;
};

const factorial = function(num) {
	if (num === 0 || num === 1 ) return 1;
  let ans = 1;
  while (num > 0) {
    ans *= num;
    num--;
  }

  return ans;
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
