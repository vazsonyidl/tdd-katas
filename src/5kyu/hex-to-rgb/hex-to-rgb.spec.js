/**
 * @task: https://www.codewars.com/kata/5282b48bb70058e4c4000fa7
 */
// a hex color represents Red, Green, Blue respectively in a range from 00 to FF
/**
 * @idea: 1. split the red, green, blue parts of the hex string, with capture groups
 * 2. transform the hex values back to decimal
 */


function splitHexToGroups(hexString) {
  if(!hexString) return {};
  const regExp = /(?<r>[0-9A-F]{2})(?<g>[0-9A-F]{2})(?<b>[0-9A-F]{2})/gi;
  const regExpMatch = regExp.exec(hexString);
  return regExpMatch ? regExpMatch.groups : {};
}

function hexGroupsToRGB(groups) {
  return  Object.keys(groups).reduce((total, current) => {
    total[current] = parseInt(groups[current], 16);
    return total;
  }, {});
}

fdescribe('HEX to RGB', () => {
  describe('split hex to groups', () => {
    it('should be defined', () => {
      expect(splitHexToGroups).toBeDefined();
    });
  });
  it('should accept one parameter', () => expect(splitHexToGroups.length).toBe(1));

  it('should handle null', () => expect(splitHexToGroups(null)).toEqual({}));
  it('should handle undefined', () => expect(splitHexToGroups(undefined)).toEqual({}));
  it('should handle hex values', () => {
    expect(splitHexToGroups('#FFFFFF')).toEqual({r: 'FF', g: 'FF', b: 'FF'});
    expect(splitHexToGroups('#000000')).toEqual({r: '00', g: '00', b: '00'});
  });

  it('should handle non hex values', () => {
    expect(splitHexToGroups('#FFFF')).toEqual({});
    expect(splitHexToGroups('#ZZ1Q1a')).toEqual({});
  });

});
