let array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
let target = 72;

// Solution #1
// Time Complexity: O(log (N)) because we eleminate half of our input everytime we traverse.
// Space Complexity: O(1) since we are not storing variables in memory.
function binarySearch(array, target) {

  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const middle = Math.floor((left+right)/2)
    const potentialMatch = array[middle];

    if( target === potentialMatch){
      return middle
    } else if (potentialMatch > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}

console.log(binarySearch(array, target));

// Solution #2
// Time Complexity: O(log (N)) because we eleminate half of our array everytime we call the helper method with the new array.
// Space Complexity: O(log(N)) since every time we call ourselves recurively we are using up memory for frames in the caLL stack.
function recurseBinarySearch(array, target) {
  return binarySearchHelper(array, target, 0, array.length - 1);
}

function binarySearchHelper(array, target, left, right) {
  if (left > right) {
    return -1;
  }
  middle = Math.floor((left + right) / 2);
  potentialMatch = array[middle];
  if (target === potentialMatch) {
    return middle;
  } else if (target < potentialMatch) {
    return binarySearchHelper(array, target, left, middle - 1);
  } else {
    return binarySearchHelper(array, target, middle + 1, right);
  }
}

console.log(recurseBinarySearch(array, target));
