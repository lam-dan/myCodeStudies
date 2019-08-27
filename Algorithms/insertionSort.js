// Insertion Sort
// Space = O(1)
// Time = O(n^2) where n is the the length of the input array

// Create 2 indexes:
// i is the index which keeps track of the unsorted list that moves forward from left to right of the array
// j index always get reset to i index after every iteration of an element
// j is also used as the index that compares the current index value to the previous index value and keeps
// going backwards through -- decrements until it becomes greater than or equal to 1 index since we know
// after the last swap we don't need to compare the 0 index to the one previously. THat would also cause an error
// since you're comparing 0 index to -1 of an array.

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      const temp = array[j - 1];
      array[j - 1] = array[j];
      array[j] = temp;
      j -= 1;
    }
  }
  return array;
}

console.log(insertionSort([8,5,2,9,5,6,3]));