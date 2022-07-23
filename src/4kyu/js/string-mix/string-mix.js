// Reference: https://www.codewars.com/kata/5629db57620258aa9d000014/train/javascript

function mix(s1, s2) {
    const s1lower = s1.match(/[a-z]/g);
    const s2lower = s2.match(/[a-z]/g);
    const alletters = new Set([...s1lower, ...s2lower]);
    const s1occurences = countOccurences(s1lower);
    const s2occurences = countOccurences(s2lower);
    const solution = {};

    for (let letter of alletters) {
       const s1freq = s1occurences[letter];
       const s2freq = s2occurences[letter];

       if(s1freq > s2freq && s1freq > 1) solution[letter.repeat(s1freq)] = 1;
       if(s2freq > s1freq && s2freq > 1) solution[letter.repeat(s2freq)] = 2;
       if(s1freq === s2freq && s1freq > 1) solution[letter.repeat(s1freq)] = '=';
    }
    return solution;
}

const countOccurences = array => {
    return array.reduce((occurences, current) => {
        occurences[current] = occurences[current] ? occurences[current] + 1 : 1;
        return occurences;
    }, {})
}
const q = mix("Are they here", "yes, they are here")
console.log(Object.keys(q).sort((a, b) => b.length - a.length));

