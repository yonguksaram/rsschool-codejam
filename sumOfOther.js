function sumOfOther(arr) {
  let sum = arr.reduce(function(sum, current) {
    return sum + current;
  }, 0);

  let resultArr = arr.map(function(item) {
    return sum - item;
  });
  return resultArr;
}