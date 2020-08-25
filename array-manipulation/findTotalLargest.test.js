const { findTotalLargest } = require('./findTotalLargest');

describe('findTotalLargest', () => {

  it('finds the total number of instances of the largest number', () => {
    const arr = [4, 4, 3, 2];

    expect(findTotalLargest(arr)).toEqual(2);
  });
  
});
