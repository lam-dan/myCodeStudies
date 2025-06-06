// Breadth-first Search algorithm
// Sibling of Depht-first search algorithm
// Graph is a tree-like data structure consisting of Nodes and children nodes optionally.
// The question is to push each level of a node's name in a graph and return them in an array.
// Input:   A
//       /  | \
//      B   C  D
//     / \    / \
//    E   F  G   H
//       / \  \
//      I   J  K

// Output: ['A','B','C','D','E','F','G','H','I','J','K']
// Need to Implement a queue data structure with a JavaScript array or Python list

// Order of operations
// 1) Start at the root node, add it to the queue.
// 2) Create a pointer called cuurentNode.
// 3) Do a while loop on the queue and if it's not empty
// 4) We're going to .shift() to remove the first node from the queue. (FIFO)
// 5) We're going to point currentNode to it
// 6) Then we're going to add the child nodes of currentNode to the queue
// 7) Then we're going to the next node in the queue now and .shift() to remove it
// 8) Repeat until while loop breaks out since there are no more nodes

// Time Complexity: O(V+E) - v is the number of vertices/nodes and e is the number of edges in the graph.  We traverse all the nodes at one
// point and we grab it's name and add it to the final array. On top of that, for every node, we add it's children node to the queue. So for
// each node, we have children nodes coming out of it equal to the number of edges.  Since A has three children nodes, so that's 3 edges coming
// out of A.
// Space Complexity: O(V) where v is the number of vertices in the graph. We have a queue data structure holds nodes. Imagine the worst case
// where all child nodes would be direct children of A, so we would have a queue that holds all these nodes at once in the queue.

class Node {
  constructor(name) {
    this.children = [];
    this.name = name;
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    // Create a queue data structure is an array that stores the first/root node in which we're calling breadthFirstSearch()
    const queue = [this];
    // While there are nodes in the queue
    while (queue.length > 0) {
      // We pop the first node out of the queue (FIFO) and create a pointer to pointer currentNode to point to it
      const currentNode = queue.shift();
      // We then push that node's name into our array we passed in
      array.push(currentNode.name);
      // For each child of the node we are pointing at, we are also pushing their children from the node's children array
      // into the queue data structure
      for (const child of currentNode.children) {
        queue.push(child);
      }
    }
    // Finally when there are not more children each node, we return the complete array in breadthFirstSearch order
    return array;
  }
}
