const { diagonalDifference } = require('./diagonalDifference');


describe('diagonalDifference', () => {

  it('returns the difference of a 3 by 3 square matrix', () => {
    const matrix = [[1, 2, 3], [4, 5, 6], [9, 8, 9]];
    
    expect(diagonalDifference(matrix)).toEqual(2);
  });

  it('deal with negative numbers', () => { 
    const matrix = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];

    expect(diagonalDifference(matrix)).toEqual(15);
  });

  it('deals with any size square matrix', () => {
    const matrixA = [[0, 1], [2, 3]];
    const matrixB = [[1, 2, 3, 4], [5, 6, 7, 8], [1, 2, 3, 4], [8, 7, 6, 0]];

    expect(diagonalDifference(matrixA)).toEqual(0);
    expect(diagonalDifference(matrixB)).toEqual(11);
  });
});
