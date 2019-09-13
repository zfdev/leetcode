/**
 * Problem: https://leetcode.com/problems/rotate-list/description/
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// var rotateRight = function (head, k) {
//     var nodes = [];
//     var tmp = head;
//     while (head) {
//         nodes.push(head);
//         head = head.next;
//     }
//     var l = nodes.length;
//     k = k % l;
//     if (k) {
//         nodes[l - 1].next = nodes[0];
//         nodes[l - k - 1].next = null;
//         tmp = nodes[l - k];
//     }
//     return tmp;
// };

var rotateRight = function (head, k) {
    while (k > 0) {
        let last = head;
        let prev;
        while (last.next) {
            prev = last;
            last = last.next;
        }
        prev.next = null;
        last.next = head;
        head = last;
        k--;
    }
    return head;
};

module.exports = rotateRight;