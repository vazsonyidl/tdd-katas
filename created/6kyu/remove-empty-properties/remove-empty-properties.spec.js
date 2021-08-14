/**
 * @task: https://www.codewars.com/kata/6117b31088498e0033f3fda8
 */

function removeEmpty(object) {
  return object === Object(object) ? Object.entries(object)
    .filter(([, value]) => value !== null && value !== undefined)
    .reduce((accumulator, [key, value]) => ({
      ...accumulator,
      [key]: value === Object(value) ? removeEmpty(value) : value
    }), {}) : {};
}

// function removeEmpty(object) {
//   return JSON.parse(JSON.stringify(object, (k, v) => v ?? undefined))
// }

describe('Remove empty properties', () => {
  it('to be defined', () => expect(removeEmpty).toBeDefined());

  it('should accept one parameter', () => expect(removeEmpty.length).toBe(1));

  it('should handle undefined', () => expect(removeEmpty(undefined)).toEqual({}));

  it('should handle null', () => expect(removeEmpty(null)).toEqual({}));

  it('should handle empty object', () => expect(removeEmpty({})).toEqual({}));

  it('should handle primitive value', () => expect(removeEmpty('none')).toEqual({}));

  it('should return non falsy value', () => {
    const object = {notNull: 11};
    expect(removeEmpty(object)).toEqual({notNull: 11});
  });

  it('should return non falsy value', () => {
    const object = {
      notNull: 11,
      isNull: null,
    };
    expect(removeEmpty(object)).toEqual({notNull: 11});
  });

  it('should filter out null value', () => {
    expect(removeEmpty({isNull: null})).toEqual({});
  });

  it('should filter out nested null value', () => {
    const object = {
      a: 1,
      b: {
        c: null,
        d: 1,
      }
    };
    expect(removeEmpty(object)).toEqual({a: 1, b: {d: 1}});
  });

  it('should filter out nested null value', () => {
    const object = {
      a: 1,
      b: {
        c: null
      }
    };
    expect(removeEmpty(object)).toEqual({a: 1, b: {}})
  });

  it('should filter out multiple level of nested null value', () => {
    const object = {
      a: 1,
      b: {
        c: {
          d: 1,
          e: undefined
        }
      }
    };
    expect(removeEmpty(object)).toEqual({a: 1, b: {c: {d: 1}}})
  });

  it('should filter out multiple level of nested null value', () => {
    const object = {
      a: 1,
      b: {
        c: {
          e: undefined
        }
      }
    };
    expect(removeEmpty(object)).toEqual({a: 1, b: {c: {}}})
  });

  it('should filter out multiple level of nested null value', () => {
    const object = {name: 'works', address: {country: undefined}};
    expect(removeEmpty(object)).toEqual({name: 'works', address: {}});
  });

  it('should keep symbol values', () => {
    const object = {
      a: Symbol('a')
    };
    expect(typeof removeEmpty(object).a).toEqual('symbol')
  });
});
