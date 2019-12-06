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

class HashTable{
    constructor(size){
        this.buckets = new Array(size);
        this.size = size;
    }

    _hash(key){
        return key.toString().length % this.size;
    }

    set(key,value){
        let index = this._hash(key);
        if(!this.buckets[index]){
            this.buckets[index] = [];
        }
        this.buckets[index].push([key,value]);
        return index;
    }

    get(key){

        let index = this._hash(key);
        
        if(!this.buckets[index]){
            return null;
        }

        let bucket;
        //for each element in the buckets[index], in other words, for each array in the bucket index
        for(bucket of this.buckets[index]){
            //if the first value of the array matches they key
            if( bucket[0] === key){
                //then we will return the second element of the array which is the key value pair
                return bucket[1];
            }
        }
        return undefined;
    }

    remove(key){

        let index = this._hash(key);
        let bucket;

        if(!this.buckets[index]){
            return null;
        }

        for(bucket of this.buckets[index]){
            if(bucket[0] === key){
                // this.buckets[index].splice(bucket,1);
                return delete this.buckets[index];
            }
        }
        return false;
    }

}

const myHashTable = new HashTable(10);
console.log("myHashTable", myHashTable);

myHashTable.set("Steph Curry",30)
myHashTable.set("Kevin Durant",35)
myHashTable.set("Klay Thompson",11)
myHashTable.set("Draymond Green",23)
myHashTable.set("Andrew Iguodala",9)

console.log("myHashTable Setup",myHashTable);

console.log(myHashTable.get("Steph Curry"));

myHashTable.remove("Steph Curry")
console.log("myHashTable After Removal",JSON.stringify(myHashTable));