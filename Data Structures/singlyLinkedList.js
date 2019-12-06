//Single Linked List
//Nodes in single linked list are created with a value and next pointer
//pointing to null
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //adding a node to the end of the linked list
  append(value) {
    //Code here
    const newNode = new Node(value);
    let currentNode;

    if (this.head === null) {
      this.head = newNode;
    } else {
      currentNode = this.head;
      // iterate to the end of the list
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      //add node
      currentNode.next = newNode;
    }
    this.tail = newNode;
    this.length++
    return this;
  }

  //adding a node to the beginning of a linked list
  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++
    return this;
  }

  //prints singly linked list
  printList() {
    const arr = [];
    let currentNode = this.head;

    while (currentNode) {
      arr.push(currentNode.value)
      currentNode = currentNode.next;
    }
    return arr;
  }

  //returns pointer for given index in the singly linked list
  getIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    //iterate through list of elements until the counter is equal to the index
    //then return the currentNode;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++
    }
    return currentNode;
  }

  //inserts node with a value in the given index
  insert(index, value) {
    if( index < 0){
      return false;
    }
    if (index > this.length) {
      return false;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      //we create the node to be added
      const newNode = new Node(value);

      //we want to get the index subtract by one because we are inserting before
      //the index since the new node becomes the new index. 
      //Example: [0,1,2,3] When index = 2, it means we're inserting between the 1 and 2.
      //In other words, we are inserting one before the index of 2 in the array.
      //We create a pointer called currentNode that now points to the object in the before the index.
      const currentNode = this.getIndex(index - 1);

      //We create another pointer called holdPtr that points to currentNode.next's object, so that we do not lose
      //the singly linked list
      const holdPtr = currentNode.next;
      currentNode.next = newNode;
      newNode.next = holdPtr;
      this.length++;
      return this;
    }
  }

  isEmpty() {
    return this.length === 0;
  }

  //removes index with the given value
  remove(index) {
    if(index < 0){
      return false;
    }
    if (index === 0) {
      let currentNode = this.head;
      this.head = currentNode.next;
      //free up memory in space by pointing it to null
      currentNode = null
      this.length--;
    } else {
      const currentNode = this.getIndex(index - 1);
      //Creates pointer on the unwanted Node object.
      let unwantedNode = currentNode.next;
      //Has the currentNode object link up using the next attribute to whatever the unwatned object is pointing at
      currentNode.next = unwantedNode.next;
      //free up memory in space by pointing it to null
      unwantedNode.next = null;
      this.length--;
      return this;
    }
  }

  //removes node with the given value
  removeValue(value) {

    let currentNode = this.head;
    let index = 0;

    while(value != currentNode.value){
      currentNode = currentNode.next;
      index++;
    } 
    return this.remove(index);
  }
}

const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(5);
linkedList.append(16);
linkedList.prepend(1);
linkedList.insert(2, 99);
linkedList.remove(1);
linkedList.removeValue(99);

//JSON stringify allows us to see nested objects
console.log(JSON.stringify(linkedList));
console.log(linkedList.printList());