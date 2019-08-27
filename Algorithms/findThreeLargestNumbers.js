// Find three largest numbers
// For arrays containing 10 or fewer elements, time complexity of .sort is O(n^2), and space complexity is O(1). 
// For longer arrays time complexity is Θ(n log(n)) (average case), and space complexity is O(log(n))
let array = [141, 1, 17, -7, -17, 927, 18, 541, 8, 7, 7];
function findThreeLargestNumbers(array) {
  let output = [];
  array.sort((a, b) => a - b);
  output.push(array[array.length - 3]);
  output.push(array[array.length - 2]);
  output.push(array[array.length - 1]);
  return output;
}

console.log(findThreeLargestNumbers(array));

function findThreeLargestNumbers2(array) {
  const threeLargest = [null, null, null];
  for (const num of array) {
    updateLargest(threeLargest, num);
  }
  return threeLargest;
}

function updateLargest(threeLargest, num) {
  if (threeLargest[2] === null || num > threeLargest[2]) {
    shiftAndupdate(threeLargest,num,2);
  } else if (threeLargest[1] === null || num > threeLargest[1]) {
    shiftAndupdate(threeLargest,num,1);
  } else if (threeLargest[0] === null || num > threeLargest[0]) {
    shiftAndupdate(threeLargest,num,0);
  }
}

function shiftAndupdate(array,num,idx){
    for(let i = 0; i <= idx; i++){
        if(i===idx){
            array[i] = num;
        }else {
            array[i] = array[i+1];
        }
    }
}


console.log(findThreeLargestNumbers2(array));
