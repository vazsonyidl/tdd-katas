/**
 * @task: https://www.codewars.com/kata/583203e6eb35d7980400002a/train/typescript
 */

const smilerPattern = /^[:;][-~]?[)D]$/;

function countSmileys(arr: string[]) {
  return arr.reduce((total, currentSmiley) => total += +smilerPattern.test(currentSmiley), 0);
}

describe('Find the smiley', () => {
  it('basic should work', () => expect(countSmileys([':)'])).toEqual(1));

  it('basic should work - with invalid values', () => expect(countSmileys([':((', ':))))'])).toEqual(0));

  it('should ignore other chars with valid smiley', () => expect(countSmileys([':)  ,', ':('])).toEqual(0));

  it('should ignore other strings', () => expect(countSmileys([':)  ,', 'null'])).toEqual(0));

  it('should ignore null', () => expect(countSmileys([':)  ,', `${null}`])).toEqual(0));
});
