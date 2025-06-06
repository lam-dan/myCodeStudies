// Sort a string without using JavaScript's .sort method
function sort_a_string_without_string_conversion(string) {
  // Turn string into an array of strings
  let newArray = string.split('');
  // Convert each string element in the array into the ASCII value
  for (let i = 0; i < string.length; i++) {
    newArray[i] = newArray[i].charCodeAt(0);
  }
  // Then we run mergeSort for the ASCII values to sort strings
  let results = mergeSort(newArray.slice());

  // After sorting is complete, we convert back to String from ASCII values.
  for (let i = 0; i < string.length; i++) {
    results[i] = String.fromCharCode(results[i]);
  }
  // Return final results of sorted string
  return results.join('');
}

// For each division or left and right arrays, we run merge method
// which compares the first value and whoever is smaller gets pushed into
// the new result array.  We use a while loop to check for length on both
// arrays and concatenate remaining values after either left or right is 0
// Example:
// [2,8,5,3,9,4,1,7]
// [2,8,5,3] [9,4,1,7]
// [2,8] [5,3] [9,4] [1,7]
// [2] [8] [5] [3] [9] [4] [1] [7]
// [2,8] [3,5] [4,9] [1,7]
// [2,3,5,8] [1,4,7,9]
// [1,2,3,4,5,7,8,9]

function merge(left, right) {
  let arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return arr.concat(left.slice().concat(right.slice()));
}

function mergeSort(arr) {
  // Fast exit to check if there is only one value in the array
  if (arr.length < 2) {
    return arr;
  }
  // Calculate middle index of array
  const middle = Math.floor(arr.length / 2);
  // Create left side of the array
  const left = arr.slice(0, middle);
  // Create right side of the array
  const right = arr.slice(middle);
  // Recursively repeat process for left side of the array & right side of the array
  // until we have individual elements of the array
  // Each time we are recurseively repeating the division process, we call the merge method on each divison
  // https://www.youtube.com/watch?v=4VqmGXwpLqc
  return merge(mergeSort(left), mergeSort(right));
}
console.log(sort_a_string_without_string_conversion('helloDaniel'));
