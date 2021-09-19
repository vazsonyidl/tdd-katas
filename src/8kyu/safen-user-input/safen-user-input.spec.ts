/**
 * @task: https://www.codewars.com/kata/56bcaedfcf6b7f2125001118/train/typescript
 */

const safeChars: Map<string, string> = new Map<string, string>([
  ['<', '&lt;'],
  ['>', '&gt;'],
  ['"', '&quot;'],
  ['&', '&amp;'],
]);

function htmlspecialchars(formData: string): string {
  return formData.split('').reduce((safeString, char) => safeString += safeChars.get(char) ? safeChars.get(char) : char, '');
}

describe('Safe user input', () => {
  it('should pass valid characters', () => expect(htmlspecialchars('abcd')).toEqual('abcd'));

  it('should transform <> chars', () => expect(htmlspecialchars('<>')).toEqual('&lt;&gt;'));

  it('should transform " char', () => expect(htmlspecialchars('ab"cd')).toEqual('ab&quot;cd'));

  it('should transform & char', () => expect(htmlspecialchars('ab&cd')).toEqual('ab&amp;cd'));
});
