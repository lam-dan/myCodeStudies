// Best: O(n^2) time complexity | O(1) space complexity
// Average: O(n^2) time complexity | O(1) space complexity
// Worst: O(n^2) time complexity | O (1) space complexity

function selectionSort(array) {
  let startIdx = 0;
  while (startIdx < array.length - 1) {
    let smallestIdx = startIdx;
    for (let i = startIdx + 1; i < array.length; i++) {
      if (array[smallestIdx] > array[i]) {
        smallestIdx = i;
      }
    }
    const temp = array[smallestIdx];
    array[smallestIdx] = array[startIdx];
    array[startIdx] = temp;
    startIdx++;
    
  }
  return array;
}

console.log(selectionSort([8,5,2,9,5,6,3]))
