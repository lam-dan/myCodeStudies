// A Hash Table (Hash Map) is a data structure used to implement an associate array, a structure that can map keys to values.
// A Hash Table uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.
// Hash Tables are considered the more efficient data structure for lookup and for this reason, they are widely used.
// Time Complexity: Average O(1) for Search, Insertion, and Deletion.
// Sometimes hash function generates the same index for a different key and value pair which results in a collision.
// If the collision occurs there are different ways to resolve the collisions:

// Linear Probing
// Separate Chaining
// coalesced chaining
// double hashing
// quadratic probing

class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key,value){

    let address = this._hash(key);

    if( !this.data[address]){
      this.data[address] = [];
    }
      this.data[address].push([key,value]);
      // console.log(this.data);
      return this.data;
  
  }

  get(key){

    let address = this._hash(key);
    const currentBucket = this.data[address];
    if(currentBucket.length){
      for( let i = 0; i< currentBucket.length; i++){
        if(currentBucket[i][0] === key){
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys(){
    const keysArray = [];
    for(let i = 0; i < this.data.length; i++){
      if(this.data[i]) {
        console.log(this.data[i][0][0]);
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(10);
console.log("myhashTable", JSON.stringify(myHashTable));

console.log(myHashTable.set('grapes', 10000));
console.log(myHashTable.get('grapes'));
console.log(myHashTable.keys());

// myHashTable.set('apples', 54);
// myHashTable.set('oranges',2);
// console.log(myHashTable);
// myHashTable.keys();

// myHashTable.set('apples', 9)
// myHashTable.get('apples')
