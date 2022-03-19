/**
 * @task: https://www.codewars.com/kata/578b44a47c77f5a1bd000011/javascript
 */

const countOccurences = (array) => array.reduce((occurences, key) => {
    const value = occurences.get(key);
    if (value) occurences.delete(key);
    occurences.set(key, value ? value + 1 : 1);
    return occurences;
  }, new Map());

const getMostFrequentElement = (map) => {
  let max = { key: null, value: -Infinity };
  for (let key of map.keys()) {
    max = map.get(key) >= max.value ? { key, value: map.get(key) } : max;
  }
  return max.key;
};

const getMostFrequent = (json) =>
  json.temperature.map((row) => getMostFrequentElement(countOccurences(row)));
