// Implementation of Binary Search Tree in JavaScript
//Node class
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Binary Search Tree class
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Helper method which creates a new node to be inserted and calls insertNode
  insert(data) {
    // Creating a node and initializing with data
    let newNode = new Node(data);
    // If the root is null, the we point the root to the newNode
    if (this.root === null) {
      this.root = newNode;
    } else {
      // We find the correct position in the tree and add the node
      this.insertNode(this.root, newNode);
    }
  }

  levelOrderSearch(rootNode) {
    // Check that a root node exists.
    if (rootNode === null) {
      return null;
    }
    // Create our queue and push our root node into it.
    let results = [];
    let queue = [];
    queue.push(rootNode);
    results.push(rootNode.data);

    // Continue searching through as queue as long as it's not empty.
    while (queue.length > 0) {
      // Create a reference to currentNode, at the top of the queue.
      let currentNode = queue[0];

      // If currentNode has a left child node, add it to the queue.
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      // If currentNode has a right child node, add it to the queue.
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
      // Remove the currentNode from the queue.
      results.push(currentNode.data);
      queue.shift();
    }
    return results;
    // Continue looping through the queue until it's empty!
  }

  // Method to insert a node in a tree, it moves over the tree to find the location
  // to insert a node with a given data.
  insertNode(node, newNode) {
    // If the data is less than the node data, move left of the tree
    if (newNode.data < node.data) {
      // If left is null, insert node here
      if (node.left === null) {
        node.left = newNode;
      } else {
        // If left is not null recurr until null is found
        this.insertNode(node.left, newNode);
      }
      // If the data is more than the node data, move right of the tree
    } else {
      // If right is null insert node here
      if (node.right === null) {
        node.right = newNode;
      } else {
        // If right is not null recurr until null is found
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Helper method that calls removeNode with a data
  remove(data) {
    // Root is re-initialized with root of modified tree.
    this.root = this.removeNode(this.root, data);
  }

  // Method to remove node with a given data. Recurrs over the tree
  // to fnd the data and remove it
  removeNode(node, key) {
    // Deleting the leaf node
    // If the root is null then tne tree is empty
    if (node === null) {
      return null;
      // If data to be deleted is less than the roots data, then move to left subtree
    } else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
      // If data to be removed is greater than roots data, the move to right subtree
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
      // If data is similar to the root's data, then delete this node
    } else {
      // Deleting node with no children
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      // Deleting node with one children
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      // Deleting node with two children mininum node of the right subtree is stored in aux
      let aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  // Finds the minimum node in tree searching starts from given node
  // We start from a node and keep moving to the left of the subtree until we find a node
  // whose left child is null, once we find such a node we return it
  findMinNode(node) {
    // If left of a node is null, then it must be minimum node
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }
  // Returns root of the tree
  getRootNode() {
    return this.root;
  }

  // searches for a node with given data
  search(node, data) {
    // if tree is empty return null
    if (node === null) {
      return null;
      // if data is less than node's data move left
    } else if (data < node.data) {
      return this.search(node.left, data);
      // if data is greater than node's data move right
    } else if (data > node.data) {
      return this.search(node.right, data);
      // if data is equal to the node data return the node
    } else {
      return node;
    }
  }

  // Depth First Traversals
  // Performs inorder traversal of the tree
  // 1. Traverse the left subtree i.e perform inorder on left subtree
  // 2. Visit the root
  // 3. Traverse the right subtree i.e perform inorder on right subtree
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
  // Performs preorder traversal of the tree
  // 1. Visit the root
  // 2. Traverse the left subtree i.e perform inorder on left subtree
  // 3. Traverse the right subtree i.e perform inorder on right subtree
  preorder(node, arr = []) {
    if (node != null) {
      console.log(node.data);
      arr.push(node.data);
      this.preorder(node.left, arr);
      this.preorder(node.right, arr);
    }
    return arr;
  }
  // Performs postorder traversal of a tree starting from a given node.
  // 1. Traverse the left subtree i.e perform inorder on left subtree
  // 2. Traverse the right subtree i.e perform inorder on right subtree
  // 3. Visit the root
  postorder(node) {
    if (node != null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }
}

let BST = new BinarySearchTree();
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

// console.log(JSON.stringify(BST))
// var root = BST.getRootNode();
// BST.inorder(root);
// BST.remove(5);
// BST.inorder(root);

// var root = BST.getRootNode();
// BST.inorder(root);
// BST.remove(7);
// BST.inorder(root);

// var root = BST.getRootNode();
// BST.inorder(root);
// BST.remove(15);
// BST.inorder(root);

var root = BST.getRootNode();
console.log('inorder traversal');

// prints 9 10 13 17 22 25 27
BST.inorder(root);

console.log('postorder traversal');
BST.postorder(root);
console.log('preorder traversal');
console.log(BST.preorder(root));
console.log(BST.levelOrderSearch(root));
