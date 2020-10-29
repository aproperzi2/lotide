const eqArrays = function(actual, expected) {
  return Array.isArray(actual) && Array.isArray(expected) && actual.length === expected.length && actual.every((val, index) => val === expected[index]);
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const firstLetter = function(word) {
  return word[0];
}

assertArraysEqual(map(words, firstLetter), ['g', 'c', 't', 'm', 't']);