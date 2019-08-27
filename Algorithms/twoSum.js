
// Solution #1 Brute Force
// Time Complexity is O(n^2)
// Space Complexity is O(1) since we don't create any new objects
// Iterate through each element and see if the sum of them equals the targetsum
function twoNumberSum(arr, targetSum){
  // We want to iterate to the 2nd last value of the array
  for(var i = 0; i <arr.length-1;i++){
    // We want to stop at the end of the array and start at the index to the right of i.
    for(var j = i+1; j<arr.length; j++){
      if(arr[i]+arr[j] === targetSum){
        return [arr[i],arr[j]].sort((a,b) => a-b);
      }
    }
  }
  return [];
}

console.log(twoNumberSum([3,5,-4,8,11,1,-1,6],10))

// Solution #2

// Time Complexity is O(n) since we doing an operation on each element of the array
// Space Complexity is O(n) since we create a dictionary.
function twoNumberSum(arr, targetSum) {
  // Write your code here.
  const dict = {}
	for(var i = 0; i < arr.length; i++){
    const difference = targetSum - arr[i];
		if(dict[difference]){
      return [arr[i],difference].sort((a,b) => a-b);
		} else {
      dict[arr[i]] = true; 
		}
	}
	return [];
}

console.log(twoNumberSum([3,5,-4,8,11,1,-1,6],10))

function twoSum (array, target) {
  const dict = {};

  for (let i = 0; i < array.length; i++) {
    const difference = target - array[i];

		if(dict[difference]){
      return [dict[difference], i];
    }
    dict[array[i]] = i;
  }

  return false;
};

console.log(twoSum([3,5,-4,8,11,1,-1,6],10))

// Solution #3
// Time Complexity is O(nLog(n)) since the sort is the biggest 
// Space Complexity is O(1) since we do not create any new data objects
function twoNumberSum(arr, targetSum) {
  arr.sort((a,b)=>a-b);
  let left = 0
  let right = arr.length-1
  while(left<right){
    const currentSum = arr[left]+arr[right];
    if( currentSum === targetSum){
      return [arr[left],arr[right]]
    }
    else if(currentSum < targetSum){
      left++;
    }
    else if(currentSum > targetSum){
      right--;
    }
  }
  return [];
} 

// console.log(twoNumberSum([3,5,-4,8,11,1,-1,6],10))
console.log(twoNumberSum([1,1,-2,2,3,-3,6,8,9],0))

// Conclusion:
// If you have value time the most, then solution #2 is the best as O(n) beats O(n^2) and O(n log n)
// If you value space the most, then solution #3 is the best as it has O(1) space since we are not creating another data object
// and the time complexity is better than solution #1 O(n^2)

