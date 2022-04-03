// Reference: https://leetcode.com/problems/two-sum/

const twoSum = (nums, target) => {
    let indicies = null;

    for(let i= 0; i<nums.length - 1; i++) {
        for(let j = i + 1; j<nums.length; j++){
            if(nums[i] + nums[j] === target) {
                indicies = [i, j]; 
            }
        }
        if(!!indicies) break;
    }
    return indicies?.sort();
}

/**
 * @runtime the runtime complexity is O(n^2), because
 * if there is a huge input, ([....., 1, 2], 3), then we are looping over 
 * until the very last two elements, and try to find the pair for each element
 * 
 * @space the space complexity is O(1), because is does not depends on the
 * length of the input array
*/
