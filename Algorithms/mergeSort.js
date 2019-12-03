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

  console.log(mergeSort([5,7,9,2,3,1]))