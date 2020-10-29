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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (char !== ' ') {
      if (results[char]) {
        results[char].push(i);
      } else {
        results[char] = [i];
      }
    }
  }
  return results;
};

const sentance = 'happy';

const result1 = letterPositions(sentance);


assertArraysEqual(result1['h'], [0]);
assertArraysEqual(result1['a'], [1]);
assertArraysEqual(result1['p'], [2, 3]);
assertArraysEqual(result1['y'], [4]);