function sort_a_string_without_string_conversion(string) {
  let newArray = string.split('');
  for (let i = 0; i < string.length; i++) {
    newArray[i] = newArray[i].charCodeAt(0);
  }
  let results = mergeSort(newArray.slice());
  for (let i = 0; i < string.length; i++) {
    results[i] = String.fromCharCode(results[i]);
  }
  return results;
}

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
  if (arr.length < 2) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}
console.log(sort_a_string_without_string_conversion('helloDaniel'));
