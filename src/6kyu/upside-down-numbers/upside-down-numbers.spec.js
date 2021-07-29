/**
 * @task: https://www.codewars.com/kata/59f7597716049833200001eb/train/javascript
 */

const mirroredPairs = {
  0: 0,
  1: 1,
  6: 9,
  8: 8,
  9: 6
};

function rotate(number) {
  return typeof number !== 'number' ? '' : +String(number)
    .split('')
    .reverse()
    .reduce((mirrored, current) => mirrored += mirroredPairs[current] !== undefined ? mirroredPairs[current] : '', '');
}

function countMirrorsInRange(start, end) {
  if(typeof start !== 'number' && typeof end !== 'number') return null;
  return Array.from({length: end - start}, (_, index) => index + start)
    .filter(number => number === rotate(number)).length;
}

describe('Upside down numbers', function () {
  // there should be two methods: one to rotate, one to check for the sameness
  // the rotated equalities are: 0 => 0, 8 => 8, 1 => 1, 6 => 9 and 9 => 6

  describe('Rotate', function () {
    it('rotate should be defined', () => expect(rotate).toBeDefined());

    it('should handle undefined', () => {
      expect(rotate(undefined)).toEqual('');
      expect(rotate(null)).toEqual('');
    });

    it('should handle not number values', () => {
      expect(rotate('something')).toEqual('');
      expect(rotate({})).toEqual('');
    });

    it('should rotate one digit the numbers /upside down/', () => {
      expect(rotate(0)).toBe(0);
      expect(rotate(1)).toBe(1);
      expect(rotate(6)).toBe(9);
      expect(rotate(8)).toBe(8);
      expect(rotate(9)).toBe(6);
    });

    it('should rotate multiple digit numbers', () => {
      expect(rotate(69)).toEqual(69);
      expect(rotate(101)).toEqual(101);
      expect(rotate(6969)).toEqual(6969);
      expect(rotate(9116)).toEqual(9116);
    });
  });

  describe('countMirrorsInRange', () => {
    it('countMirrorsInRange should be defined', () => expect(countMirrorsInRange).toBeDefined());

    it('should handle undefined values', () => {
      expect(countMirrorsInRange(null, null)).toBeNull();
      expect(countMirrorsInRange(undefined, 'null')).toBeNull();
    });

    it('should handle non number values', () => {
      expect(countMirrorsInRange({}, '101')).toBeNull();
    });

    it('should handle non ten based values', () => {
      expect(countMirrorsInRange(0x10, 0x17)).toBe(0);
    });

    it('should count in intervals', () => {
      expect(countMirrorsInRange(0, 10)).toEqual(3);
      expect(countMirrorsInRange(10, 100)).toEqual(4);
      expect(countMirrorsInRange(100, 1000)).toEqual(12);
      expect(countMirrorsInRange(60000, 130000)).toEqual(55);
    });
  });
});
