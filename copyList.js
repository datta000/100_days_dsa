/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (!head) return null;

    let curr = head;

    while (curr) {
        let newNode = new Node(curr.val, curr.next, null);
        curr.next = newNode;
        curr = newNode.next;
    }

    curr = head;
    while (curr) {
        if (curr.random) {
            curr.next.random = curr.random.next;
        }
        curr = curr.next.next;
    }

    curr = head;
    let copyHead = head.next;
    while (curr) {
        let copy = curr.next;
        curr.next = copy.next;
        if (copy.next) {
            copy.next = copy.next.next;
        }
        curr = curr.next;
    }

    return copyHead;
};
