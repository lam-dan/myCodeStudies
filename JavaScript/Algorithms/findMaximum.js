// Given a array of numbers. Part of the list is in ascending and part of it is in descending.
// Can you find the index at which the list inverts?
// Input = [2,4,7,13,14,21,23,45,33,31,12,3,1]
// Output: 7

// Algorithm
// 1) Use a binary search technique
// 2) At every step calculate the mid element
// 3) Compare the mid element with its neighbors
// 4) if they are increasing then search the right sub array,
// 5) if they are decreasing then search the left sub array
// 6) else we have found the max element

//Recursion Solution
function findMaximum(array, low = 0, high = array.length - 1) {
  // Base Case: Only one element is present in arr[low..high]*/
  if (low === high) {
    // return array[low];
    return low;
  }

  // If there are two elements and first is greater then the first element is maximum */
  if (high === low + 1 && array[low] >= array[high]) {
    // return array[low];
    return low;
  }

  // If there are two elements and second is greater then the second element is maximum */
  if (high === low + 1 && array[low] < array[high]) {
    // return array[high];
    return high;
  }

  let mid = Math.floor((low + high) / 2);

  // If we reach a point where arr[mid] is greater than both of
  // its adjacent elements arr[mid-1] and arr[mid+1], then arr[mid]
  // is the maximum element*/
  if (array[mid] > array[mid + 1] && array[mid] > array[mid - 1]) {
    // return array[mid];
    return mid;
  }

  if (array[mid] > array[mid + 1] && array[mid] < array[mid - 1]) {
    return findMaximum(array, low, mid - 1);
  } else {
    // when arr[mid] is greater than arr[mid-1] and smaller than arr[mid+1]
    return findMaximum(array, mid + 1, high);
  }
}

// let array = [2,4,7,13,14,21,23,45,33,31,12,3,1]
// let n = array.length;

// Best Solution
// Time complexity
// Since we are using the binary search technique, its O(log n)
console.log(findMaximum([2, 4, 7, 13, 14, 21, 23, 45, 33, 31, 12, 3, 1]));

function findMaximum(array) {
  if (array.length === 0) {
    return false;
  }
  if (array.length === 1) {
    return array[0];
  }
  if (array.length === 2) {
    return array[1];
  }
  let low = 0;
  let high = array.length - 1;
  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    const potentialMatch = array[mid];
    const left = array[mid - 1];
    const right = array[mid + 1];
    if (left < potentialMatch && potentialMatch > right) {
      return mid;
    } else if (left < potentialMatch) {
      low = mid;
    } else {
      high = mid;
    }
  }
}
console.log(findMaximum([2, 4, 7, 13, 14, 21, 23, 45, 33, 31, 12, 3, 1]));
