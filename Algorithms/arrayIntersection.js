// Assuming no duplicates and arrays are both sorted
// Time Complexity is O(nlog(n))
// Space Complexity is O(n)

function intersection(array1, array2) {
  let i = 0;
  let j = 0;
  let results = [];

  while (i < array1.length && j < array2.length) {
    //intersection!
    if (array1[i] === array2[j]) {
      results.push(array1[i]);
      i++;
      j++;

      //if current element of `a` is smaller than current element of `b`
      //then loop through `a` until we found an element that is equal or greater
      //than the current element of `b`.
    } else if (array1[i] < array2[j]) {
      i++;

      //same but for `b`
    } else {
      j++;
    }
  }

  return results;
}

console.log(intersection([1, 3, 5, 7], [3, 5, 9, 13]));
