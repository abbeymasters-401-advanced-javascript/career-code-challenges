const add = require('../challenges/code-challenge-one');

describe('testing adding date function', () => {


  it('can add seconds to a date', () => {
    const theFinalDate = new Date(2019, 10, 21, 9, 20, 1, 4);
    const theDiff = '10s';
    const result = add(theFinalDate, theDiff);
    expect(result).toEqual(new Date(2019, 10, 21, 9, 20, 11, 4));
  });


});