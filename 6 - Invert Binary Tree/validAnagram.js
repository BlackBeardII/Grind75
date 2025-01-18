const runTests = require('../utils/testRunner');

/**
 * Valid Anagram
 * @param {string} s - First string
 * @param {string} t - Second string
 * @return {boolean} - True if t is an anagram of s, false otherwise
 */
function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    // Create frequency map
    const charCount = {};

    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of t) {
        if (!charCount[char]) return false;
        charCount[char]--;
    }

    return true;
}

// Run tests
runTests(isAnagram, './test_cases.txt');
