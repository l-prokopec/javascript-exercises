const findTheOldest = function (people) {
  // list of people with their age
  const ages = people.map((person) => {
    // if yearOfDeath missing
    if (!person.yearOfDeath) {
      return {
        name: person.name,
        age: new Date().getFullYear() - person.yearOfBirth,
      };
    }
    return {
      name: person.name,
      age: person.yearOfDeath - person.yearOfBirth,
    };
  });
  // picking the oldest person a returning his name
  const oldest = ages.reduce((max, person) => {
    if (person.age > max.age) {
      return person;
    } else {
      return max;
    }
  });
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
