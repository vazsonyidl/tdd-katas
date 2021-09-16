/**
 * @task: https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript
 */

function strCount(str = '', letter = '') {
  if(!str) return 0;
  const regExp = new RegExp(`${letter}`, 'g');
  return (str.match(regExp) || []).length;
}

describe('Count occurrences', () => {
  it('basic for repeating letters', () => expect(strCount('aa', 'a')).toEqual(2));

  it('return 0 for empty string', () => expect(strCount('', 'a')).toEqual(0));

  it('return 0 for non matching string', () => expect(strCount('a', 'b')).toEqual(0));

  it('return 0 for non matching string', () => expect(strCount(undefined, undefined)).toEqual(0));

  it('return 0 for non matching string', () => expect(strCount(null, 0)).toEqual(0));
});
