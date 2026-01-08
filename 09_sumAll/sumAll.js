const sumAll = function (a, b) {
  if (Number.isInteger(a) === false || Number.isInteger(b) === false) {
    return "ERROR";
  } else if ((a || b) < 0) {
    return "ERROR";
  } else if (b < a) {
    let c = a;
    a = b;
    b = c;
  }
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
