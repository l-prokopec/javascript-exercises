const removeFromArray = function (arr, ...remove) {
  let filteredArray = arr;
    for (let i = 0; i < remove.length; i++) {
    filteredArray = filteredArray.filter((element) => element !== remove[i]);
  }
  return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
