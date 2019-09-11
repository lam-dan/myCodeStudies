// In-order Traversal: [1,2,5,5,10,15,22]
// Pre-order Traversal: [10,5,2,1,5,15,22]
// Post-order Traversal: [1,2,5,5,22,15,10]
// Input: 10
//       / \
//      5   15
//     / \   \
//    2   5  22
//   /
//  1

// Time Complexity: O(n)
// Space Complexity: O(n)
function inOrderTraverse(tree, array) {
    if (tree !== null) {
        inOrderTraversal(tree.left, array);
        array.push(tree.value)
        inOrderTraversal(tree.right, array)
    }
    return array
}

// Time Complexity: O(n)
// Space Complexity: O(n)
function preOrderTraverse(array) {
    if (tree !== null) {
        array.push(tree.value);
        preOrderTraversal(tree.left, array)
        preOrderTraversal(tree.right, array)
    }
    return array
}

// Time Complexity: O(n)
// Space Complexity: O(n)
function postOrderTraverse(array) {
    if (tree !== null) {
        postOrderTraversal(tree.left, array)
        postOrderTraversal(tree.right, array)
        array.push(tree.value);
    }
    return array
}