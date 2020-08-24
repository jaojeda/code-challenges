//Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function minMaxSum(arr) {
  arr.sort((a, b) => a - b);
  
  const min = String(arr.slice(0, 4).reduce((a, b) => a + b));
  const max = String(arr.slice(1, 5).reduce((a, b) => a + b));

  console.log(min + ' ' + max);
}

module.exports = { minMaxSum };
