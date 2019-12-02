function duplicateElements(arr) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    arr.push(0);
  }

  let stop = Math.floor(arr.length / 2);
  let k = arr.length - 1;
  let j = Math.floor(arr.length / 2) - 1;

  while (k >= stop) {
    arr[k] = arr[j];
    j--;
    k--;
  }
  return arr;
}

console.log(duplicateElements([1, 2, 3]));
