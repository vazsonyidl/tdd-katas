/**
 * @task: https://www.codewars.com/kata/56efab15740d301ab40002ee/train/javascript
 */

// greatest common divisor
function gcdi(x, y) {
  let absX = Math.abs(x);
  let absY = Math.abs(y);
  while (absY) [absY, absX] = [absX % absY, absY];
  return absX;
}

// least common multiple
const lcmu = (a, b) => (!a || !b) ? 0 : Math.abs(a * b) / gcdi(a, b);

const som = (a, b) => a + b;

const maxi = (a, b) => Math.max(a, b);

const mini = (a, b) => Math.min(a, b);

function operArray(fct, arr, init) {
  return arr.reduce((accumulator, current, index) => {
    accumulator.push(fct(accumulator[index - 1] || init, current));
    return accumulator;
  }, []);
}

describe('Reducing by steps', () => {
  const a = [18, 69, -90, -78, 65, 40];

  it('should work for som', () => {
    const r = [18, 87, -3, -81, -16, 24];
    expect(operArray(som, a, 0)).toEqual(r);
  });

  it('should work for maxi', () => {
    const r = [18, 69, 69, 69, 69, 69];
    expect(operArray(maxi, a, a[0])).toEqual(r);
  });

  it('should work for mini', () => {
    const r = [ 18, 18, -90, -90, -90, -90 ];
    expect(operArray(mini, a, a[0])).toEqual(r);
  });

  it('should work for gcdi', () => {
    const r = [ 18, 3, 3, 3, 1, 1 ];
    expect(operArray(gcdi, a, a[0])).toEqual(r);
  });

  it('should work for lcmu', () => {
    const r = [ 18, 414, 2070, 26910, 26910, 107640 ];
    expect(operArray(lcmu, a, a[0])).toEqual(r);
  });
});
