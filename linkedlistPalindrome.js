/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (!head || !head.next) return true;
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let prev = null, curr = slow;
    while (curr) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }

    let p1 = head, p2 = prev;
    while (p2) {
        if (p1.val !== p2.val) return false;
        p1 = p1.next;
        p2 = p2.next;
    }

    return true;
};
