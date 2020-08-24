const { minMaxSum } = require('./minMaxSum');

describe('Min Max Sum', () => {
  
  it('gets the min and max of an array of five digits', () => {
    const arr = [1, 2, 3, 4, 5];

    console.log = jest.fn();
    minMaxSum(arr);

    expect(console.log).toHaveBeenCalledWith('10 14');
  });

  it('can deal with negative numbers', () => {
    const arr = [-5, -2, 1, 2, 3];

    console.log = jest.fn();
    minMaxSum(arr);

    expect(console.log).toHaveBeenCalledWith('-4 4');
  });
});
