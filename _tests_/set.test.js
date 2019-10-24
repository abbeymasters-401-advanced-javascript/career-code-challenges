const Set = require('../challenges/set');

describe('testing instance and static methods of Set', () => {

  it('adds a value to new Set', () => {
    const firstSet = new Set([5, 6, 7, 8]);
    firstSet.add(5);
    firstSet.add(10);
    expect(firstSet.array).toEqual([5, 6, 7, 8, 10]);
  });

  it('removes a value from set', () => {
    const firstSet = new Set([5, 6, 7, 8]);
    firstSet.remove(5);
    expect(firstSet.array).toEqual([6, 7, 8]);
  });

  it('checks if value is included in set', () => {
    const firstSet = new Set([5, 6, 7, 8]);
    const test = firstSet.has(5);
    const falseTest = firstSet.has(10);
    expect(test).toBe(true);
    expect(falseTest).toBe(false);
  });

});