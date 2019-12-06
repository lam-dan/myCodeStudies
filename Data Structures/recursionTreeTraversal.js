
class Node {

  constructor(value) {
    this.left = null
    this.right = null
    this.value = value
  }
}

class Tree {
  constructor(value) {
    this.root = null;
    this.right = null;
    this.value = value
  }

  // Insert Node
  insert(value) {

    // const newNode = new Node(value);

    // if (this.root === null) {
    //   this.root = newNode;
    // } else {

      if (this.value) {
        if (value < this.value) {
          if (this.left === null) {
            this.left = new Node(value);
          } else {
            this.left.insert(value);
          }
        }
      } else if (value > this.value) {
        if (this.right === null) {
          this.right = new Node(value);
        } else {
          this.right.insert(value);
        }
      } else {
        this.value = value;
      }
    }
  

  // Print the Tree
  printTree() {
    if (this.left) {
      this.left.printTree();
    }
    console.log(this.value);
    if (this.right) {
      this.right.printTree();
    }
  }

  // Inorder traversal
  // Left -> Root -> Right
  inorderTraversal(currentNode) {
    let arr = []
    if (currentNode) {
      arr = this.inorderTraversal(currentNodec.left)
      arr.push(currentNode.value)
      arr = arr.push(this.inorderTraversal(currentNode.right));
    }
    return res

  }
}


const tree = new Tree();


tree.insert(14)
tree.insert(35)
tree.insert(10)
// tree.insert(19)
// tree.insert(31)
// tree.insert(42)
// print(tree.inorderTraversal(root))