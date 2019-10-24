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

  it('gives you an intersection of sets', () => {
    const firstSet = new Set([5, 6, 7, 1]);
    const secondSet = new Set([1, 2, 3, 4]);
    const test = firstSet.intersection(secondSet);
    expect(test.array).toEqual([1]);
  });

  it('returns union of both sets', () => {
    const firstSet = new Set([5, 6, 7, 1]);
    const secondSet = new Set([1, 2, 3, 4]);
    const test = firstSet.union(secondSet);
    expect(test.array).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('returns difference from both sets', () => {
    const firstSet = new Set([5, 6, 7, 1]);
    const secondSet = new Set([1, 2, 3, 4]);
    const test = firstSet.difference(secondSet);
    expect(test.array).toEqual([2, 3, 4, 5, 6, 7]);
  });

  it('returns intersection of two sets - static', () => {
    const firstSet = new Set([5, 6, 7, 1]);
    const secondSet = new Set([1, 2, 3, 4]);
    expect(Set.intersection(firstSet, secondSet).array).toEqual([1]);
  });

  it('returns union of two sets - static', () => {
    const firstSet = new Set([5, 6, 7, 1]);
    const secondSet = new Set([1, 2, 3, 4]);
    expect(Set.union(firstSet, secondSet).array).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it('returns difference from two sets - static', () => {
    const firstSet = new Set([5, 6, 7, 1]);
    const secondSet = new Set([1, 2, 3, 4]);
    expect(Set.difference(firstSet, secondSet).array).toEqual([5, 6, 7, 2, 3, 4]);
  });

});