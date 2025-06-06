// Validate a BST Tree
// A binary sub tree is considered to be a BST node:
// 1) If it's value is greater than the values of every node to the left
// 2) If it's value is less than the values of every node to it's right
// 3) Both of it's children nodes left and right are also BST nodes themselves or null values.

// O(N) time complexity where N is the number of nodes since we are calling the validateBST function on each node.
// O(D) space complexity is the depth of the tree since the depth of the tree is the longest branch and would thus
// account for the most amount of space we would be using on the call stack.

function validateBst(tree) {
  return validateBstHelper(tree, -Infinity, Infinity);
}

function validateBstHelper(tree, minValue, maxValue) {
  // If we traverse through recursively calling ourselves and we are at the leaf node which is null
  // then we will want to return false and call abck all the frames
  if (tree === null) {
    return true;
  }
  // Condition in which the tree would not be a BST since we know
  // tree.value must be > minValue and tree.value < maxValue
  if (tree.value < minValue || tree.value >= maxValue) {
    return false;
  }
  // recuseively check if left and right side of the tree is BST
  const leftIsValid = validateBstHelper(tree.left, minValue, tree.value);
  // if both sides of the tree return true, then together with the and statement they will return true
  return leftIsValid && validateBstHelper(tree.right, tree.value, maxValue);
}
