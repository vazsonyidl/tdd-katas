/**
 * @copyright One Identity 2021
 * @license All Rights Reserved
 */

const esModules = ['validator'].join('|');

module.exports = {
  moduleDirectories: ['node_modules'],
  rootDir: '.',
  testMatch: ['**/+(*.)+(spec).+(ts|js)?(x)'],
  transform: {
    "^.+\\.(ts|js)?$": ["@swc/jest"],
  },
  transformIgnorePatterns: [`./node_modules/(?!${esModules})`],
  moduleFileExtensions: ['ts', 'js', 'html'],
};
