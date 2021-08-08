/**
 * @task: https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
 */

/**
 * @idea: the function will accept an array - the return string should be made out of 2 functions
 * first: prepend the names
 * second: add the remaining to the end of the string
 */

const nameTransformObject = {
  0: () => 'no one',
  1: (names) => names[0],
  2: (names) => concatWith(names, 'and'),
  3: (names) => concatWith( [names[0], ` ${concatWith(names.slice(1), 'and')}`])
}

const defaultTransformFn = (names) => `${names[0]}, ${names[1]} and ${names.length - 2} others`;

const concatWith = (values, separator) => separator ? values.join(` ${separator} `): values.join();

const createDescription = (names) => names.length > 1 ? 'like this' : 'likes this';

function prependNames(names) {
  const transformFn = nameTransformObject[names?.length || 0] || defaultTransformFn;
  return transformFn(names);
}

const likes = (names) => `${prependNames(names)} ${createDescription(names)}`;

describe('Who likes it', () => {

  it('should be defined', expect(prependNames).toBeDefined);

  it('should accept one parameter', () => expect(prependNames.length).toBe(1));

  it('should return no one likes for empty array', () => expect(prependNames([])).toEqual('no one'));

  it('should return no one likes for undefined', () => expect(prependNames(undefined)).toEqual('no one'));

  it('should return no one likes for non array values ', () => expect(prependNames([])).toEqual('no one'));

  it('should return one name for one element name array', () => expect(prependNames(['James'])).toEqual('James'));

  it('should return name and name for two elements name array', () => expect(prependNames(['James', 'John'])).toEqual('James and John'));

  it('should return name and name for three elements name array', () => {
    const likes = prependNames(['Max', 'John', 'Mark']);
    expect(likes).toEqual('Max, John and Mark')
  });

  it('should return name and name for four or more elements name array', () => {
    const likes = prependNames(['Max', 'John', 'Mark', 'John']);
    expect(likes).toEqual('Max, John and 2 others');
  });

  it('should return name and name for four or more elements name array', () => {
    const likes = prependNames(['Max', 'John', 'Mark', 'John', 'Mark']);
    expect(likes).toEqual('Max, John and 3 others');
  });

  it('should return correct string for empty array', () => expect(likes([])).toEqual('no one likes this'));

  it('should return correct string for one element array', () => expect(likes(['Max'])).toEqual('Max likes this'));

  it('should return correct string for two element array', () => expect(likes(['Max', 'John'])).toEqual('Max and John like this'));

  it('should return correct string for three element array', () => expect(likes(['Max', 'John', 'Eva'])).toEqual('Max, John and Eva like this'));

  it('should return correct string for four element array', () => expect(likes(['Max', 'John', 'Eva', 'Eva'])).toEqual('Max, John and 2 others like this'));
});
