// Reference: https://leetcode.com/problems/remove-element/

/**
 * @idea because it need to be done in place, must be mutate
 * the input array
 * Use sort and splice for mutating
 */

const removeElement = function(nums, val) {
    nums.sort((num => num === val ? 1 : -1))
    const index = nums.findIndex(element => element === val);

    nums.splice(index > -1 ? index : nums.length);
};

let a = [0,1,2,2,3,0,4,2];
removeElement(a, 2);

// a should be: [0,1,3,0,4];

// My solution is better in memory usage than ~75% of submitted solutions
// My solution is better in runtime performance than ~50% of submitted solutions

// TODO: improve runtime performance