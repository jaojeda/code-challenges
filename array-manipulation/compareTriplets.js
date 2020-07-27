/* The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].
 If a[i] > b[i], then Alice is awarded 1 point. If a[i] < b[i], then Bob is awarded 1 point. If a[i] = b[i], then neither person receives a point.
 Return output should be array with sore of a at index 0, score of b at index 1.
 */


const compareTriplets = (a, b) => {
  let scoreA = 0;
  let scoreB = 0;
  return a.reduce((acc, num, i) => {

      if(num > b[i]) {
          scoreA++
      } else if(num < b[i]) {
          scoreB++
      }

      acc[0] = scoreA
      acc[1] = scoreB

      return acc
  }, [])
}

module.exports = { compareTriplets };