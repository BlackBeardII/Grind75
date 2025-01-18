const runTests = require('../utils/testRunner');

/**
 * Valid Parentheses
 * @param {string} s - Input string containing only '(', ')', '{', '}', '[' and ']'
 * @return {boolean} - Returns true if the input string is valid, false otherwise
 */
function isValid(s) {
    const stack = [];
    const pairs = { ')': '(', '}': '{', ']': '[' };
    
    for (let char of s) {
        if (char in pairs) {
            if (stack.length === 0 || stack.pop() !== pairs[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    
    return stack.length === 0;
}

// Run tests
runTests(isValid, './test_cases.txt');
