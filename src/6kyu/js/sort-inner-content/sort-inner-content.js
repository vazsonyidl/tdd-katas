/**
 * @task: https://www.codewars.com/kata/5898b4b71d298e51b600014b/javascript
 */

const sortDescending = (substring) => {
    return substring
      .split("")
      .sort((a, b) => (a > b ? -1 : 1))
      .join("");
  };
  
  const reverseInnerContent = (word) => {
    return word.length === 1
      ? word
      : `${word.substring(0, 1)}${sortDescending(
          word.substring(1, word.length - 1)
        )}${word.substring(word.length - 1)}`;
  };
  
  const sortTheInnerContent = (words) =>
    words.split(" ").map(reverseInnerContent).join(" ");
  