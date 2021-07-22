/**
 * @task: https://www.codewars.com/kata/59f34ec5a01431ab7600005a/train/javascript
 */

// const factorial = number => number > 1 ? number * factorial(number - 1) : number;

// const getFactorialLength = (number) => BigInt(factorial(number)).toString().length;

// Kamenetsky’s formula to the rescue, credit: https://www.thecoducer.com/2019/07/kamenetsky-formula-to-count-digits-in-factorial/
const getFactorialLength = (number) => Math.floor(number * Math.log10(number / Math.E) + Math.log10(2 * Math.PI * number) / 2) + 1;

describe('Factorial length', function () {
  it('function should exist', () => expect(getFactorialLength).toBeDefined());

  it('should allow one argument', () => expect(getFactorialLength.length).toBe(1));


  it('should work for small numbers /less than 50/', () => {
    expect(getFactorialLength(5)).toBe(3);
    expect(getFactorialLength(50)).toBe(65);
  });

  it('should handle big numbers', () => {
    expect(getFactorialLength(500)).toBe(1135);
    expect(getFactorialLength(50000)).toBe(213237);
    expect(getFactorialLength(500000)).toBe(2632342);
    expect(getFactorialLength(5000000)).toBe(31323382);
  });
});
