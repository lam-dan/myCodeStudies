// In-order Traversal: [1,2,5,5,10,15,22] https://www.youtube.com/watch?v=5dySuyZf9Qg
// Pre-order Traversal: [10,5,2,1,5,15,22] https://www.youtube.com/watch?v=1WxLM2hwL-U
// Post-order Traversal: [1,2,5,5,22,15,10] https://www.youtube.com/watch?v=4zVdfkpcT6U
// Input: 10
//       / \
//      5   15
//     / \   \
//    2   5  22
//   /
//  1

// Time Complexity: O(n)
// Space Complexity: O(n)

// Traverse to the left most node
// Add that value of that node to the array
// Return or go back up the tree
// Add values of the nodes as you go back up
// Traverse to the right side of the node

function inOrderTraverse(tree, array) {
    // Eventually you will hit a node that is null, this is the base case for the recursion
    if (tree !== null) {
        // Traverse the left most node
        inOrderTraversal(tree.left, array);
        // Add that value of the the node
        array.push(tree.value)
        inOrderTraversal(tree.right, array)
    }
    // Once you hit the base case above you will start to return from the call and pushing the values of the
    // trees into the array.
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