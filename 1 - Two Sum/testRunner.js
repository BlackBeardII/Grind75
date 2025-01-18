const fs = require('fs');

/**
 * Test Runner
 * Reads test cases from a file and runs them against a provided solution function.
 * @param {Function} solution - The function to test.
 * @param {string} testCasePath - Path to the test cases file.
 */
function runTests(solution, testCasePath) {
    try {
        const testCases = fs.readFileSync(testCasePath, 'utf8').split('\n\n');
        let passed = 0;
        
        testCases.forEach((testCase, index) => {
            const [input, expected] = testCase.split('\n');
            const inputParsed = JSON.parse(input.replace('Input: ', '').trim());
            const expectedOutput = JSON.parse(expected.replace('Output: ', '').trim());

            const result = solution(...inputParsed);
            const success = JSON.stringify(result) === JSON.stringify(expectedOutput);

            console.log(`Test ${index + 1}: ${success ? 'Passed' : 'Failed'}`);
            if (!success) {
                console.log(`  Input: ${inputParsed}`);
                console.log(`  Expected: ${expectedOutput}`);
                console.log(`  Got: ${result}`);
            }
            
            if (success) passed++;
        });
        
        console.log(`\nSummary: ${passed}/${testCases.length} tests passed.`);
    } catch (error) {
        console.error('Error reading test cases:', error);
    }
}

module.exports = runTests;
