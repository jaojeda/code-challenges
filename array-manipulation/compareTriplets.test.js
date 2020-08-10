const { compareTriplets } = require('./compareTriplets');


describe('compareTriplets', () => {

  it('compares two triplets and returns a score array', () => {
    const a = [17, 28, 30];
    const b = [99, 16, 8];

    expect(compareTriplets(a, b)).toEqual([2, 1]);
  });

  it('returns 0s if all scores are the same', () => {
    const a = [1, 2, 3];

    expect(compareTriplets(a, a)).toEqual([0, 0]);
  });
});
