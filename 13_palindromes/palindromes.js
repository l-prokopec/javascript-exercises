const palindromes = function (str) {
  str = str.toLowerCase();
	const letters = str.match(/[a-z0-9]/gi) || [];
  let reversed = [...letters];
	reversed = reversed.reverse();
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] !== reversed[i]) {
      return false;
    }
  }
	return true;
};

// Do not edit below this line
module.exports = palindromes;
