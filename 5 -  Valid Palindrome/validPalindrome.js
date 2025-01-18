const runTests = require('../utils/testRunner');

/**
 * Valid Palindrome
 * @param {string} s - Input string
 * @return {boolean} - Returns true if the string is a palindrome, false otherwise
 */
function isPalindrome(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0, right = s.length - 1;
    
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
}

// Run tests
runTests(isPalindrome, './test_cases.txt');
