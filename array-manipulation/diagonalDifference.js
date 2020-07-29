//Given a square matrix, calculate the absolute difference between the sums of its diagonals.

const diagonalDifference = (arr) => {

  let diagA = 0;
  let diagB = 0;
  let diff;

  arr.forEach((curr, i) => {
      diagA = diagA + curr[i];
      diagB = diagB + curr[arr.length - 1 - i];
      diff = diagA - diagB;
  })

  return diff < 0 ? diff * -1 : diff;
}

module.exports = { diagonalDifference };
