const runTests = require('../utils/testRunner');

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = val;
 *     this.next = (next===undefined ? null : next);
 * }
 */

/**
 * Merge Two Sorted Lists
 * @param {ListNode} l1 - First sorted linked list
 * @param {ListNode} l2 - Second sorted linked list
 * @return {ListNode} - Merged sorted linked list
 */
function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(-1);
    let current = dummy;
    
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    current.next = l1 !== null ? l1 : l2;
    return dummy.next;
}

// Run tests
runTests(mergeTwoLists, './test_cases.txt');
