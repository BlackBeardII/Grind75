const runTests = require('../utils/testRunner');

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val);
 *     this.left = (left===undefined ? null : left);
 *     this.right = (right===undefined ? null : right);
 * }
 */

/**
 * Inverts a binary tree.
 * @param {TreeNode} root - Root of the binary tree
 * @return {TreeNode} - Root of the inverted binary tree
 */
function invertTree(root) {
    if (!root) return null;

    // Swap left and right subtrees
    let temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);

    return root;
}

// Run tests
runTests(invertTree, './test_cases.txt');
