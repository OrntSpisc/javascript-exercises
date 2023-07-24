const findTheOldest = function(array) {
    return array.reduce(
      (oldest, currentObject) => 
      getAge(currentObject) > getAge(oldest) ? currentObject : oldest);
};

function getAge(object) {
  const birthYear = object.yearOfBirth;
  let deathYear = object.yearOfDeath;
  if (!deathYear) {
    deathYear = (new Date().getFullYear());
  }
  return deathYear - birthYear;
}
// Do not edit below this line
module.exports = findTheOldest;
