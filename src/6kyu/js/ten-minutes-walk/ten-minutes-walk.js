// Reference: https://www.codewars.com/kata/54da539698b8a2ad76000228/javascript
const pairs = {
    n: 's',
    e: 'w'
};

function isValidWalk(walk) {
    if (walk.length !== 10) return false;

    const directions = walk.reduce((counted, current) => {
        counted[current] = counted[current] ? counted[current] + 1 : 1;
        return counted;
    }, {});

    return Object.keys(pairs).every(key => directions[key] === directions[pairs[key]]);
  }

  console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));