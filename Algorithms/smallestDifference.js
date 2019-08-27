// Write a function that takes in two non-empty arrays of integers. The function should find the pair of numbers (one)
// from the first array, one from the second array) whose absolute difference is closest to zero. The function should return
// an array containing these two numbers, with the number from the first array in the first position. Assume
// that there will only be one pair of numbers with the smallest difference.

//Time Complexity O(N Log(N)) - We iterate through all the elements once in both arrays so that's O(N+M) which doesn't affect 
// the overall time complexity since it's really dictated by sorting the arrays in the beginning. Javascript's .sort is an
// O(log(n)) time complexity for elements greater than 10, and is O(n^2) for 10 or fewer elements. IT's a combnination of quick sort
// for larger arrays and merge sort fo smaller arrays.
// Space Complexity  O(1)
function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let idxOne = 0;
  let idxTwo = 0;
  let smallest = Infinity;
  let current = Infinity;
  let smallestPair = [];
  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let firstNum = arrayOne[idxOne];
    let secondNum = arrayTwo[idxTwo];
    if (firstNum < secondNum) {
      current = secondNum - firstNum;
      idxOne++;
    } else if (secondNum < firstNum) {
      current = firstNum - secondNum;
      idxTwo++;
    } else {
      return [firstNum, secondNum];
    }
    if (smallest > current) {
      smallest = current;
      smallestPair = [firstNum, secondNum];
    }
  }
  return smallestPair;
}

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]));
