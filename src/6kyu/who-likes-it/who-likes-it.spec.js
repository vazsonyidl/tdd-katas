/**
 * @task: https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
 */

/**
 * @idea: the function will accept an array - the return string should be made out of 2 functions
 * first: prepend the names
 * second: add the remaining to the end of the string
 */

function concatWith(values, separator) {
  return separator ? values.join(` ${separator} `): values.join();
}

function prependNames(names) {
  if(!Array.isArray(names) || names.length === 0) return 'no one';
  if(names.length === 1) return names[0];
  if(names.length === 2) return concatWith(names, 'and');
  if(names.length === 3) return concatWith( [names[0], ` ${concatWith(names.slice(1), 'and')}`]);
  return `${names[0]}, ${names[1]} and ${names.length - 2} others`;
}

function createDescription(names) {
  return names.length > 1 ? 'like this' : 'likes this';
}

function likes(names) {
  return `${prependNames(names)} ${createDescription(names)}`
}

fdescribe('Who likes it', () => {

  it('should be defined', expect(prependNames).toBeDefined);

  it('should accept one parameter', () => expect(prependNames.length).toBe(1));

  it('should return no one likes for empty array', () => expect(prependNames([])).toEqual('no one'));

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
