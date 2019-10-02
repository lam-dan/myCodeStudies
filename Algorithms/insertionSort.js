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

let insertionSort = (array) => {
  let length = array.length;
  for (let i = 1; i < length; i++) {
      let currentElement = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > currentElement) {
        array[j + 1] = array[j];
          j -= 1;
      }
      array[j + 1] = currentElement;
  }
  return array;
};

console.log(insertionSort([8,5,2,9,5,6,3]));