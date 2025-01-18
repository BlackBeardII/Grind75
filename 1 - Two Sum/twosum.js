const runTests = require('../../utils/testRunner');

/**
 * Two Sum using a two-pointer approach with sorted index tracking.
 * @param {number[]} nums - Array of numbers
 * @param {number} target - Target sum
 * @return {number[]} Indices of the two numbers that add up to target
 */
function twoSum(nums, target) {
    // Step 1: Store original indices before sorting
    let indexedNums = nums.map((num, index) => ({ num, index }));

    // Step 2: Sort the array based on values
    indexedNums.sort((a, b) => a.num - b.num);

    // Step 3: Two-pointer approach
    let left = 0, right = indexedNums.length - 1;

    while (left < right) {
        let sum = indexedNums[left].num + indexedNums[right].num;
        if (sum === target) {
            // Step 4: Return the original indices
            return [indexedNums[left].index, indexedNums[right].index];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return []; // No valid pair found (shouldn't happen per problem constraints)
}

// Run tests
runTests(twoSum, './test_cases.txt');
