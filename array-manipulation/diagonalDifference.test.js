const { diagonalDifference } = require('./diagonalDifference');


describe('diagonalDifference', () => {

  it('returns the difference of a 3 by 3 square matrix', () => {
    const matrix = [[1, 2, 3], [4, 5, 6], [9, 8, 9]];
    
    expect(diagonalDifference(matrix)).toEqual(2);
  });

  it('deal with negative numbers', () => { 
    const matrix = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];

    expect(diagonalDifference(matrix)).toEqual(15);
  })
});