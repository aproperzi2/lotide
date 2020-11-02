const middle = function(arr) {
  // create output array
  let newArr = [];
  let middle = 0;
  if (arr.length === 1 || arr.length === 2) {
    return newArr;
  } else if (arr.length % 2 === 1) {
    middle = Math.floor(arr.length / 2);
    newArr.push(arr[middle]);
  } else {
    middle = Math.floor(arr.length / 2);
    newArr.push(arr[middle] - 1);
    newArr.push(arr[middle]);
  }
  return newArr;
}

module.exports = middle;
