/**
 * @param {number[]} nums 
 * @param {number} target 
 * @return {number[]} 
 */
var twoSum = function(nums, target) {
    let j = 1;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] + nums[j] === target) return [i, j];

        j++;

        if (j >= nums.length) {
            j = i + 2;
        }
    }

    return [];
};
