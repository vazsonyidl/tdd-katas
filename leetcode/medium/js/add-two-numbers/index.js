/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

export function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export const addTwoNumbers = function(l1, l2) {
    const numberOne = Number(findElement(l1));
    const numberTwo = Number(findElement(l2));

    return numberOne + numberTwo;
};

export const findElement = (node) => {
    if(node.next === null) {
        return node.val;
    }

    return `${findElement(node.next)}${node.val}`;
}