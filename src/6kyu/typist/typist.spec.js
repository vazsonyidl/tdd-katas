/**
 * @task: https://www.codewars.com/kata/592645498270ccd7950000b4/train/javascript
 */

/**
 * @idea: the test should be parsed with regexps as the following
 * 1: count the numbers of caps locks with non capital => capital and capital => non capital differences
 * 2: count the leftover letters
 */

const patternObject = {
  capsOffPattern: /([A-Z][a-z])/g,
  capsOnPattern: /^[A-Z]|([a-z][A-Z])/g,
  lowercasePattern: /[a-z]/g,
  uppercasePattern: /[A-Z]/g,
}

const typist = s => Object.values(patternObject).reduce((matchCount, pattern) => matchCount += (s.match(pattern) || '').length || 0, 0);

describe('Typist', () => {

  it('should be defined', () => expect(typist).toBeDefined());

  it('should accept one parameter', () => expect(typist.length).toBe(1));

  it('should return input length for lowercase character list', () => expect(typist('abcdd')).toEqual(5));

  it('should return input length + 1 for uppercase character list', () => expect(typist('A')).toEqual(2));

  it('should return input length + 1 for uppercase character list', () => expect(typist('AA')).toEqual(3));

  it('should return input length + 1 for lowercase -> uppercase character list', () => expect(typist('aA')).toEqual(3));

  it('should return input length + 2 for uppercase -> lowercase character list', () => expect(typist('Aa')).toEqual(4));

  it('should work for random strings', () => {
    expect(typist('AAAaaaBBBbbbABAB')).toBe(21);
    expect(typist('AmericanRAILWAY')).toBe(18);
    expect(typist('AaAaAa')).toBe(12);
    expect(typist('BeiJingDaXueDongMen')).toBe(31);
  });

});

