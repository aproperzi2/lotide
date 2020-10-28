const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(allLetters, itemsToCount) {

  let result = {};

  for (let letter of allLetters) {
    if (itemsToCount[letter]) {
      if (result[letter]) {
        result[letter] += 1
      } else {
        result[letter] = 1;
      }
    }
  }

  return result;

};

const sentance = 'happy';

const result1 = countLetters(sentance, { 'h': true, 'a': true, 'p': true, 'y': true});


assertEqual(result1['h'], 1);
assertEqual(result1['a'], 1);
assertEqual(result1['p'], 2);
assertEqual(result1['y'], 1);