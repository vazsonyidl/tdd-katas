/**
 * @task: https://www.codewars.com/kata/586d6cefbcc21eed7a001155/train/javascript
 */

/**
 * @idea: with a regexp split by consecutive same characters, then filter the most frequent one
 */

const regExp = /([a-zA-Z0-9])\1*/g;

function longestRepetition(value) {
  const matches = value.match(regExp);
  const mostFrequent = matches ? matches.reduce((longest, characters) => {
    return characters.length > longest.length ? {length: characters.length, character: characters[0]} : longest;
  }, {length: 0, character: ''}) : {length: 0, character: ''};

  return [mostFrequent.character, mostFrequent.length];
}

describe('Longest repetetition', () => {
  it('should return ["", 0] for empty string', () => expect(longestRepetition('')).toEqual(['', 0]));

  it('should return value for 1 length string', () => expect(longestRepetition('ab')).toEqual(['a', 1]));

  it('should return first occurrence for equal occurrence letters', () => expect(longestRepetition('ab')).toEqual(['a', 1]));

  it('should return first occurrence for equal occurrence letters', () => expect(longestRepetition('ba')).toEqual(['b', 1]));

  it('should return first occurrence for equal occurrence letters', () => expect(longestRepetition('baa')).toEqual(['a', 2]));

  it('should return first occurrence for equal occurrence letters', () => expect(longestRepetition('cbdeuuu900')).toEqual(['u', 3]));

  it('should return first occurrence for equal occurrence letters', () => expect(longestRepetition('wne9j8zt672js293i7sjf6r58g4ze23tjcc584mcql76g3rps93bdkh7p13lgp35trnhxobnpdn1q7w8ujh3zp18xplyv3alyjg15spl1epv3fqk84p5wesyq6jy30x78vsuxjoesh8hgsapi4rre9ekgexgiw88v4uzu7act8gllmv1ohj1mvqna9xrfc66dnufjmv9vjvqn6ejrhir1888782ajazivn140te1v30dn3rz8zwo21cnhrq22u3eyzovnewk87ao7qqiedhcsvg8bxn5xlybdl1iawc68h8a91b5ih79a4ann604olosrjsajbak7jgqg0p4kpuik08tdxoth726cjbfazi074ljn82pjpi54k80gnaa2h74ggxf2xhfezrm9n548eqhcsgxgfo7zoloqxwgtmc8ke0nvs7bc0fi154vzri290a8q8xgm0pji2n3eokucvnfttcs1mc4hbl53enn13cus4wbu5lbdq69')).toEqual(['8', 3]));

  it('should return first occurrence for equal occurrence letters', () => expect(longestRepetition('900')).toEqual(['0', 2]));
});
