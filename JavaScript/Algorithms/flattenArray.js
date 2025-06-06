// Implement a function that takes in an array of elements with nested arrays
// and returns a final array with no nested arrays.
// Input: [[[[0], 1], 2], 3, 4]
// Output: [0,1,2,3,4]

function flatten(arr) {
    // Implement this
    let result = [];
    if(!Array.isArray(arr)){
        return arr; 
    }
    for(let i =0;i<arr.length;i++){
        result = result.concat(flatten(arr[i]));
    }
    return result;
  }
   
  var arr0 = [0, 1, 2, 3, 4];
  var arr1 = [[0,1], 2, [3, 4]]; // [[1,2],[1,2],1,2]
  var arr2 = [[[0, 1], 2], 3, 4];
  var arr3 = [[[[0], 1], 2], [3, [4,1]]];
  console.log(flatten(arr0)); // [0, 1, 2, 3, 4]
  console.log(flatten(arr1)); // [0, 1, 2, 3, 4]
  console.log(flatten(arr2)); // [0, 1, 2, 3, 4]
  console.log(flatten(arr3)); // [0, 1, 2, 3, 4]

