const eqArrays = require('../eqArrays');

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); //returns true
console.log(eqArrays(["1", 2, "3"], ["1", "2", "3"])); // returns false
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // returns false
