class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    //O(1) Time | O(1) Space
    setHead(node) {
        // Write your code here.
        if (this.head === null) {
            this.head = node;
            this.tail = node;
            return;
        }
        this.insertBefore(this.head,node)
    }
    //O(1) Time | O(1) Space
    setTail(node) {
        // Write your code here.
        if (this.tail === null){
            this.setHead(node); 
            return;
        }
        this.insertAfter(this.tail,node);

    }

    //O(1) Time | O(1) Space
    insertBefore(node, nodeToInsert) {
        // Write your code here.
        if (nodeToInsert === this.head && nodeToInsert === this.tail){
            return;
        }
        this.remove(nodeToInsert);
        nodeToInsert.prev  = node.prev;
        nodeToInsert.next = node;

        if(node.prev === null){
            this.head = nodeToInsert;
        } else {
            node.prev.next = nodeToInsert
        }
        node.prev = nodeToInsert
    }

    //O(1) Time | O(1) Space
    insertAfter(node, nodeToInsert) {
        // Write your code here.
        if(nodeToInsert === this.head && nodeToInsert === this.tail){
            return;
        }
        this.remove(nodeToInsert);
        nodeToInsert.prev = node;
        nodeToInsert.next = node.next;

        if(node.next === null){
            this.tail = nodeToInsert;
        } else {
            node.next.prev = nodeToInsert;
        }
        node.next = nodeToInsert;
    }

    //O(p) Time | O(1) Space
    insertAtPosition(position, nodeToInsert) {
        // Write your code here.
        if(position === 1){
            this.setHead(nodeToInsert);
            return;
        }
        let currentNode = this.head;
        let currentPosition = 1;
        while (currentNode && position !== currentPosition) {
            currentNode = currentNode.next;
            currentPosition++;
        }

        if(currentNode){
            this.insertBefore(currentNode,nodeToInsert)
        } else {
            this.setTail(nodeToInsert);
        }
    }

    //O(n) Time | O(1) Space
    removeNodesWithValue(value) {
        // Write your code here.
        let currentNode = this.head;
        while (currentNode) {
            const nodeToRemove = currentNode;
            currentNode = currentNode.next;
            if(nodeToRemove.value  === value){
                this.remove(nodeToRemove)
            }
        }
    }

    //O(1) Time | O(1) Space
    remove(node) {
        // Write your code here.
        if( node === this.head){
            this.head = this.head.next;
        }
        if(node === this.tail){
            this.tail = this.tail.prev;
        }
        this.removeNodeBindings(node);
    }

    //O(n) Time | O(1) Space
    containsNodeWithValue(value) {
        // Write your code here.
        let currentNode = this.head;
        while (currentNode !== null && currentNode.value !== value) {
            currentNode = currentNode.next;
        }
        return currentNode !== null;
    }

    //O(1) Time | O(1) Space
    removeNodeBindings(node){
        if(node.prev !== null){
            node.prev.next = node.next;
        }
        if(node.next !== null){
            node.next.prev = node.prev;
        }
        node.prev = null;
        node.next = null;
    }
}