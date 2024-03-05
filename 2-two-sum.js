/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head1 = l1;
    let str1 = ''
    while(head1 != null){
        str1 = head1.val + str1;
        head1 = head1.next;
    }

    let head2 = l2;
    let str2 = '';
    while(head2 != null){
        str2 = head2.val + str2;
        head2 = head2.next;
    }
    let total = BigInt(str1) + BigInt(str2);
    let arr = Array.from(String(total))

    let node, temp;
    for(let i=0; i <= arr.length-1; i++){
        if(!node)
            node = new ListNode(arr[i]);
        else {
            temp = new ListNode(arr[i]);
            temp.next = node;
            node = temp;
        }
    }
    return node;

};