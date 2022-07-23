/**
 * @task: https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript
 */

// const checker = (types, values) => types.some(type => values.includes(type));

const findCommentChar = (types, values) => values.find(value => types.includes(value));

function stripComments(inputString, commentTypes) {
  return inputString.split(/\n/).map(row => {
    const rowCharacters = row.split('');
    const commentChar = findCommentChar(commentTypes, rowCharacters);
    const commentIndex = rowCharacters.findIndex((char ) => char === commentChar);
    return commentIndex > -1 ? rowCharacters.slice(0, commentIndex).join('').trim() : rowCharacters.join('').trim();
  }).join('\n');
}

describe('Strip by comments', () => {
  it('should work multiple comments', () => expect(
    stripComments('apples, plums % and bananas\npears\noranges !applesauce', ['%', '!']))
    .toEqual('apples, plums\npears\noranges')
  );

  it('should work for simple input', () => expect(stripComments('apples, plums', ['#'])).toEqual('apples, plums'));
});
