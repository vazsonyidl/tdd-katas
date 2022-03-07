/**
 * @task: https://www.codewars.com/kata/54da5a58ea159efa38000836/train/typescript
 */

const init = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];

const findOdd = (numbers: number[]): number | null => {
  let counted: { [key: string]: number } = {};
  counted = numbers.reduce((acc, current) => {
    acc[current] = acc[current] ? acc[current] + 1 : 1;
    return acc;
  }, counted);

  return Number(Object.keys(counted).find((key) => counted[key] % 2 !== 0));
};


describe('Find the odd integer', () => {
  it('should find odd integer', () => expect(findOdd(init)).toEqual(5));
  it('should return null > the caller should handle invalid ', () => expect(findOdd([0])).toEqual(0));
  it('should return first odd integer', () => expect(findOdd([7, +false, 9, +false])).toEqual(7));
});
