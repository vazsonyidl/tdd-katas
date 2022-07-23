/**
 * @task: https://www.codewars.com/kata/5282b48bb70058e4c4000fa7
 */

/**
 * @idea: to find all permutations, first: take the first letter, then prepend all of the rest of permutations to it - recursively
 */

function permutations(word) {
  let result = [];

  if (word.length === 1) {
    result.push(word);
    return result;
  }

  for (let i = 0; i < word.length; i++) {
    const firstLetter = word[i];
    console.log(firstLetter);
    const remainingLetters = word.substring(0, i) + word.substring(i + 1);
    const remainingPermutations = permutations(remainingLetters);
    for (let j = 0; j < remainingPermutations.length; j++) {
      result.push(firstLetter + remainingPermutations[j]);
    }
  }

  return unique(result);
}

const unique = array => array.filter((value, index) => array.indexOf(value) === index);

