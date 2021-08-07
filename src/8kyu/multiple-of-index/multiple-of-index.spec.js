/**
 * @task: https://www.codewars.com/kata/5a34b80155519e1a00000009/train/javascript
 */

/**
 * @idea: the function should accept an array
 * the filter function on the array accepts the following params / in order / actual value, index /from 0/, array it was called on
 * if the actual value is divisible with the index, let that pass through
 * if the input is not an array, return an empty array
 */

const multipleOfIndex = array => Array.isArray(array) ? array.filter((value, index) => value % index === 0) : [];

describe('Multiple of index', () => {
  it('it should be defined', () => expect(multipleOfIndex).toBeDefined());

  it('it should accept one parameter', () => expect(multipleOfIndex.length).toBe(1));

  it('it should return empty array for null', () => expect(multipleOfIndex(null)).toEqual([]));

  it('it should return empty array for string', () => expect(multipleOfIndex('something')).toEqual([]));

  it('it should return empty array for non divisible value', () => expect(multipleOfIndex([1])).toEqual([]));

  it('it should return empty array for non divisible values', () => expect(multipleOfIndex([1, 1.51, 7, 5, 5])).toEqual([]));

  it('it should return divisible values', () => expect(multipleOfIndex([1, 1, 2, 3, 4])).toEqual([1, 2, 3, 4]));

  it('it should filter non divisible values', () => expect(multipleOfIndex([0, 1, 5, 9, 13])).toEqual([1, 9]));
});
