const add = require('../challenges/code-challenge-one');

describe('testing adding date function', () => {


  it('adds seconds', () => {
    const theFinalDate = new Date(2019, 10, 21, 9, 20, 1, 4);
    const theDiff = '10s';
    const result = add(theFinalDate, theDiff);
    expect(result).toEqual(new Date(2019, 10, 21, 9, 20, 11, 4));
  });

  it('adds minutes', () => {
    const theFinalDate = new Date(2019, 10, 21, 9, 20, 1, 4);
    const theDiff = '10m';
    const result = add(theFinalDate, theDiff);
    expect(result).toEqual(new Date(2019, 10, 21, 9, 30, 1, 4));
  });

  it('adds hours', () => {
    const theFinalDate = new Date(2019, 10, 21, 9, 20, 1, 4);
    const theDiff = '10h';
    const result = add(theFinalDate, theDiff);
    expect(result).toEqual(new Date(2019, 10, 21, 19, 20, 1, 4));
  });

  it('adds days', () => {
    const theFinalDate = new Date(2019, 10, 21, 9, 20, 1, 4);
    const theDiff = '5d';
    const result = add(theFinalDate, theDiff);
    expect(result).toEqual(new Date(2019, 10, 26, 9, 20, 1, 4));
  });

  it('adds months', () => {
    const theFinalDate = new Date(2019, 10, 21, 9, 20, 1, 4);
    const theDiff = '2M';
    const result = add(theFinalDate, theDiff);
    expect(result).toEqual(new Date(2019, 12, 21, 9, 20, 1, 4));
  });

  it('adds years', () => {
    const theFinalDate = new Date(2019, 10, 21, 9, 20, 1, 4);
    const theDiff = '4y';
    const result = add(theFinalDate, theDiff);
    expect(result).toEqual(new Date(2023, 10, 21, 9, 20, 1, 4));
  });


});