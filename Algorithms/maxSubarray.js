//Brute Force BigO: O(n^2)
//The solution has a time complexety of O(n2). In other words, if we increase the array size 2 times, the algorithm will work 4 times longer.
function maxSubArray(arr){
    let max = arr[0];
    for(var i = 0; i< arr.length; i++){
      let sumFixedStart = 0;
      for(let j = i; j < arr.length; j++){
        sumFixedStart += arr[j];
        max = Math.max(max, sumFixedStart);
      }
    }
  
  return max
  
  }

//If you've noticed, we only needed to worry about the previous max value at each index of the array, so we don't need to keep track 
//of every max at each instance for this function. By just storing the previous maximum for each element, we can check the currentMax like we 
//have been in the previous examples and set the max accordingly. This solution retain the O(n) time complexity, but removes the necessity for 
//keeping track of every element we come across. BigO = O(n);
  var maxSubArray = function(nums) {
    let currentMax = nums[0];
    let max = nums[0];
  
    for (let i = 1; i < nums.length; i += 1) {
  
      
      currentMax = Math.max(currentMax + nums[i], nums[i]);
      max = Math.max(currentMax, max);
    }
    
    return max;
  };
  
  console.log(maxSubArray([-2,4,-1,6]));