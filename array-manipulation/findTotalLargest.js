//Find the total number of instances the largest number in an array of numbers.

const findTotalLargest = (arr) => {
  return arr.sort((a, b) => b - a).reduce((acc, curr, i, src) => {
    if(curr === src[i + 1]) {
      acc++;
    }
    return acc;
  }, 1);
};

module.exports = { findTotalLargest };
