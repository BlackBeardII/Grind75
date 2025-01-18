const runTests = require('../utils/testRunner');

/**
 * Best Time to Buy and Sell Stock
 * @param {number[]} prices - Array of stock prices
 * @return {number} - Maximum profit that can be achieved
 */
function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    
    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }
    
    return maxProfit;
}

// Run tests
runTests(maxProfit, './test_cases.txt');
