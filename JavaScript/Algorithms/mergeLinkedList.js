/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}



var mergeTwoLists = function(l1, l2) {
    let runner = new ListNode();
    let head = runner;
    while(l1 && l2){
        if(l1.val > l2.val){          
            runner.next = l2;
            // console.log(l2)
            l2 = l2.next;
        } else {
            runner.next = l1;
            l1 = l1.next;
        }
        runner = runner.next;
    }
    runner.next = l1 || l2;
    return head.next;
};

console.log(mergeTwoLists([1,2,4],[1,3,4]));


function mergeTwoSortedLists (l1, l2) {

    let mergedLinkedListHead = { val : -1, next : null }; // create dummy node to get started
    let runner = mergedLinkedListHead;

    while(l1 && l2) {
        if(l1.val > l2.val) {
            runner.next = l2;
            l2 = l2.next;
        } else {
            runner.next = l1;
            l1 = l1.next;
        }
        runner = runner.next;
    }

    // l1 = 1->2->3, l2 = 10->20->30
    // In that case l1, will point to null and while loop will break
    // Simply point runner to l2. We do not have to add individual nodes
    runner.next = l1 || l2;

    return mergedLinkedListHead.next;
}

console.log(mergeTwoSortedLists([1,2,4],[1,3,4]));