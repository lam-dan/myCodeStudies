function findUnique (array){
    let dict = {};
    for(let i =0; i<array.length;i++){
        if(dict[array[i]]){
            dict[array[i]] += 1;
        } else {
            dict[array[i]] = 1;
        }
    }
    
    for(const key in dict){
        if(dict[key] === 1){
           return key;
           }
    }
    
    return false;

}

// console.log(findUnique([1,2,3,1,2,3,4]));

// Best Solution O(n) Time Complexity with O(1) space

// Concept
// If we take XOR of zero and some bit, it will return that bit
//  a ⊕ 0 = a
// If we take XOR of two same bits, it will return 0
    // a ⊕ a = 0
    // a \oplus b \oplus a = (a \oplus a) \oplus b = 0 \oplus b = ba⊕b⊕a=(a⊕a)⊕b=0⊕b=b
// So we can XOR all bits together to find the unique number.

// Complexity Analysis
// Time complexity : O(n)O(n). We only iterate through \text{nums}nums, so the time complexity is the number of elements in \text{nums}nums.
// Space complexity : O(1)O(1).

var singleNumber = function(nums) {
    let singleOne = 0;
    for(let i =0; i< nums.length;i++){
        singleOne = nums[i]^singleOne;
    }
    return singleOne
};

console.log(singleNumber([1,2,3,1]))

console.log(0^1^2^3)
console.log(0^1^1)