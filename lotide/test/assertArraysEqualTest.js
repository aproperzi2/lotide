const assertArraysEqual = require('../assertArraysEqual');

console.log(assertArraysEqual(["1", "6", "9"], ["1", "6", "9"])); //returns true
console.log(assertArraysEqual(["1", 2, "7"], ["1", "2", "7"])); // returns false
console.log(assertArraysEqual(["1", "5", "3"], ["1", "8", 3])); // returns false
