/**
 * @task: https://www.codewars.com/kata/59f8750ac374cba8f0000033/train/javascript
 */

// give back the nth index element of a sequence which has no prime digit

// starting solution: start a loop, collect the acceptable numbers then return the corresponding element.
// optimization #1: memoize the elements

function isPrime(number) {
  for(let i = 2, sqrt = Math.sqrt(number); i <= sqrt; i++)
    if(number % i === 0) return false;
  return number > 1;
}
// sub function plans: containsOnlyNonPrime -> check if a number contains only non prime numbers
const nonPrimeDigits = [0, 1, 4, 6, 8, 9];
function containsOnlyNonPrime(number) {
  return !!number ? String(number).split('').every(digit => nonPrimeDigits.includes(+digit)) : false;
}

function memoizedGetNonPrimeAtIndex() {
  let cache = {};
  return (index) => {
    if (typeof index !== 'number') return null;
    let array = [];
    let starting = 1;
    while (array.length !== index + 1) {
      if(cache[starting]) {
        array.push(starting);
      } else {
        const isNonPrime = containsOnlyNonPrime(starting) && !isPrime(starting);
        cache[starting] = isNonPrime;
        if(isNonPrime) array.push(starting);
      }
      starting++;
    }
    return array[index];
  }
}

describe('Life without primes', () => {
  describe('check for numbers that contains only non prime numbers', () => {
    it('function should be defined', () => expect(containsOnlyNonPrime).toBeDefined());

    it('should handle undefined, null and 0', () => {
      expect(containsOnlyNonPrime(undefined)).toBe(false);
      expect(containsOnlyNonPrime(null)).toBe(false);
      expect(containsOnlyNonPrime(0)).toBe(false);
    });

    it('should return true for non-prime containing numbers', () => {
      expect(containsOnlyNonPrime(1)).toBe(true);
      expect(containsOnlyNonPrime(4)).toBe(true);
      expect(containsOnlyNonPrime(44)).toBe(true);
      expect(containsOnlyNonPrime(404)).toBe(true);
      expect(containsOnlyNonPrime(104689)).toBe(true);
    });

    it('should return false for prime containing numbers', () => {
      expect(containsOnlyNonPrime(2)).toBe(false);
      expect(containsOnlyNonPrime(2001)).toBe(false);
      expect(containsOnlyNonPrime(1792)).toBe(false);
    });
  });

  describe('return the nth elements of the sequence', () => {
    it('should work for basic indicies', () => {
      const getNonPrimeAtIndex = memoizedGetNonPrimeAtIndex();
      expect(getNonPrimeAtIndex(null)).toBeNull();
      expect(getNonPrimeAtIndex(undefined)).toBeNull();
      expect(getNonPrimeAtIndex(0)).toEqual(1);
      expect(getNonPrimeAtIndex(1)).toEqual(4);
      expect(getNonPrimeAtIndex(10)).toEqual(44);
    });
  });
});
