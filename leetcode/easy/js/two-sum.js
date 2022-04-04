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

// Reduce runtime complexity:

/**
 * @idea we need to keep a Mapping between the element and its index
 * What data structure has the best lookup time for this? - hashmap
 * Loop over the input array first, store each element in a Map where
 * each <key-value> pair is a <number-index> pair. 
 * On the second loop, we check if the target-number exists in the hash-table.
 * If yes, return the two indicies. If not, continue looping
 */

 const twoSumWithMap = (nums, target) => {
    const hashmap = new Map();

    for(let i= 0; i<nums.length; i++) {
        hashmap.set(nums[i], i);
    }

    for(let i = 0; i<nums.length; i++) {
        if(hashmap.has(target - nums[i]) && i !== hashmap.get(target - nums[i])) return [i, hashmap.get(target - nums[i])]
    }
}

const twoSumWithObject = (nums, target) => {
    const hashmap = {};

    for(let i= 0; i<nums.length; i++) {
        hashmap[nums[i]] = i;
    }

    for(let i = 0; i<nums.length; i++) {
        if(hashmap[target - nums[i]] && i !== hashmap[target - nums[i]]) 
            return [i, hashmap[target - nums[i]]]
    }
}