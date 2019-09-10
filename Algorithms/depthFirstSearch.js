// Famous graph traversal interview question and sibling of breadth first search.
// Exploring or traversing a graph; the graph is a tree like data strucutre that is going to have a bunch of nodes.
// Each nodes will have a bunch of names and children nodes optionally.

// Asked to traverse this graph, grab the names of the nodes, put them in an array, and return the array.
// Input:     A
//       /    |   \
//      B     C   D
//     / \       / \
//    E   F     G   H
//       / \    \
//      I   J    K
// Output: ['A','B','E','F','I','J','C','D','G','K','H'] 

// Vertices and Edges
// Vertices are nodes in the graph 
// Edges are the lines in the graph

// Time Complexity: O(v+e) where v is the number of vertices or nodes in the graph and e is the number of edges connecting those
// Space Complexity: O(v) we're storing an array that holds vertices. Worst case scenario, we have a graph that just has one child node
// goes all the way down, so we're adding a bunch of frames to the call stack until we get to the leaf node of the tree where
// there are no children nodes, until we finally return to go back all the way up the tree
// so each frame we're adding takes up a vertice space so it's O(v) where v is the number of vertices we have on the graph. 

// Order of Operations:
// 1) We start at the root node 'A' and push in the that value into the array.
// 2) Then we call dephFirstSearch for each of the children verticies of the root node 'A'
// 3) Do a for loop, so for each of the children node, we recurisvely call depthFirstSearch on it and pass in the root name and the same array
// 4) When we finish traversing through every verticies and child verticies, we return the array.

class Node {
    constructor(name){
        this.name = name;
        this.children = [];
    }

    addChild(name){
        this.children.push(new Node(name))
        return this
    }

    depthFirstSearch(array){
        // We start at the root node 'A' and push in the that value into the array 
        array.push(this.name);
        // Then we call dephFirstSearch for each of the children verticies of the root node 'A'
        for(const child in this.children){
            // For each of the children node, we recurisvely call depthFirstSearch on it and pass in the root name and the same array
            child.depthFirstSearch(array)
        }
        // When we finish traversing through every verticies and child verticies, we return the array.
        return array;
    }
}




