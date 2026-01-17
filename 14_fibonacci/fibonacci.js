const fibonacci = function (x) {
  x = Number(x);
  if (x < 0) {
    return "OOPS";
  }
  if (x === 0) {
    return 0;
  }
  let n = 1;
  let nMinus1 = 1;
  let nMinus2 = 1;
  for (let i = 2; i < x; i++) {
    n = nMinus1 + nMinus2;
    nMinus2 = nMinus1;
    nMinus1 = n;
  }
  return n;
};

// Do not edit below this line
module.exports = fibonacci;
