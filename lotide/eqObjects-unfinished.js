const eqArrays = function(arr1, arr2) {
  return Array.isArray(arr1) && Array.isArray(arr2) && arr1.length === arr2.length && arr1.every((val, index) => val === arr2[index]);
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) === Array.isArray(object2[key])) {
      return true;
    } else {
      return false;
    }
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3]};
const dc = { d: ["2", 3], c: "1"};
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqArrays(eqObjects(cd, cd2), false); // => false