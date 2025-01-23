/**
 * @param {number[]} nums - Sorted array of numbers
 * @param {number} target - Target value to search for
 * @return {number} - Index of target in nums, or -1 if not found
 */
var search = function(nums, target) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid; // Found target, return index
        } else if (nums[mid] < target) {
            left = mid + 1; // Move right
        } else {
            right = mid - 1; // Move left
        }
    }
    
    return -1; // Target not found
};
