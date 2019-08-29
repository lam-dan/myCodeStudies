//Binary Search Tree
//Nodes in binary search trees are created with a value, left and right pointers
//pointing to null.
class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);

        //condition to add the new node at the root if a root node doesn't exist
        if (this.root === null) {
            this.root = newNode;
        } else {

            // if that is not the case, then we point the currentNode to the whatever this.root is point at
            let currentNode = this.root;

            //we use a while loop to continue traversing since we do not know the length of tree
            while (true) {
                // if the value of the newNode is less than the value of the currentNode's value
                if (value < currentNode.value) {
                    // if the currentNode.left is null, in other words not pointing at anything
                    if (!currentNode.left) {
                        //then assign the currentNode left  point it to the new Node object and return
                        currentNode.left = newNode;
                        return this
                    }
                    //else if there is something w   e'll traverse the currentNode by having it point
                    // at the whatver the currentNode.left is pointing at
                    currentNode = currentNode.left;
                } else {
                    //if currentNode.right is pointing at null
                    if (!currentNode.right) {
                        //then we are going to have it point to the the newNode object we created earlier and return
                        currentNode.right = newNode;
                        return this
                    }
                    //however, it's already point at an object, we're going to traverse the currentNode pointer and have it
                    //point at the thing currentNode.right is pointing at
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value) {
        //fast exit to check the root to see if it exists
        if (!this.root) {
            return false;
        }

        //create a pointer that points at whatever the root is pointing at
        let currentNode = this.root;

        //while loop to traverse since we don't know length of binary tree
        //whiel there is a 
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                return currentNode;
            }
        }
        return false;
    }
    //Code here

    remove(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                //We have a match, get to work!

                //Option 1: No right child: 
                if (currentNode.right === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {

                        //if parent > current value, make current left child a child of parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;

                            //if parent < current value, make left child a right child of parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }

                    //Option 2: Right child which doesnt have a left child
                } else if (currentNode.right.left === null) {
                    currentNode.right.left = currentNode.left;
                    if (parentNode === null) {
                        this.root = currentNode.right;
                    } else {

                        //if parent > current, make right child of the left the parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;

                            //if parent < current, make right child a right child of the parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }

                    //Option 3: Right child that has a left child
                } else {

                    //find the Right child's left most child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while (leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    //Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if (parentNode === null) {
                        this.root = leftmost;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = leftmost;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftmost;
                        }
                    }
                }
                return true;
            }
        }
    }

    //recursive answer to add nodes


    checkNext(current, value, newNode = new Node(value))  {
        if (!current.left && value < current.value) {
            current.left = newNode
        } else if (!current.right && value > current.value) {
            current.right = newNode;
        } else if (current.right && (value > current.value)) {
            this.checkNext(current.right, value, newNode)
        } else if (current.left && (value < current.value)) {
            this.checkNext(current.left, value, newNode)
        }
    }
    
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

console.log(JSON.stringify(tree));

// Solution 1 
// Recursion
// Best Case on Average: O(log(n)) Time and O(log(n)) soace
// Worst: Time Complexity: O(n)  Space Complexity: O(n)
// Since we are recurively calling itself, it creates memory in space after every call
// In terms of time complexity, every time we recursively call it self it performs an operations at each node or deph

function findClosestValueInBst(tree,target){
    return findClosestValueInBstHelper(tree, target,Infinity);
}

function findClosestValueInBstHelper(tree, target, closest){

    if(tree.root === null){
        return closest;
    }
    if(Math.abs(target-closest) > Math.abs(target-tree.root.value)){
        closest = tree.root.value;
    }
    if(target < tree.root.value){
        return findClosestValueInBstHelper(tree.left, target, closest)
    }
    else if (target > tree.root.value){
        return findClosestValueInBstHelper(tree.right, target, closest)
    }
    else {
        return closest;
    }

}

console.log(findClosestValueInBst(tree,13));


//Solution 2
// Average: O(log(n)) Time and O(1) Space complexities
// Worst: O(n) Time and O(1) Space complexities
// We simply don't use additional memory

function findClosestValueInBst(tree,target){
    return findClosestValueInBstHelper(tree, target,Infinity);
}

function findClosestValueInBstHelper(tree, target, closest){
    let currentNode = tree.root;
    while(currentNode){
        if(Math.abs(target-closest) > Math.abs(target-currentNode.value)){
            closest = currentNode.value;
        }
        if(target < currentNode.value){
            currentNode = currentNode.left;
        }
        else if(target > currentNode.value){
            currentNode = currentNode.right;
        }
        else {
            break
        }
    }
    return closest;
}

console.log(findClosestValueInBst(tree,13));