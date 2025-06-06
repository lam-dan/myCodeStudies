// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

// function moveZeroes (arr){
//     for( var i = 0; i<arr.length; i++){
//         if(arr[i] == 0){
//             temp = arr[i+1];
//             arr[i+1] = arr[i];
//             arr[i] = temp;
            
//         }
//     }
//     console.log(arr);;
// }

//Big O is O(N^2)
// var moveZeroes = function(nums) {       
//     for(var i = nums.length;i--;){
//         if(nums[i]===0){
//             nums.splice(i,1)
//             nums.push(0);
//         }
//     }
//     return nums;
// };

// console.log(moveZeroes([0,1,0,3,12]));

//two pointers
//BigO- O(N)

function moveZeroes2(arr) {
    let indx = 0;
    let length = arr.length;
    for(var i =0; i< length;i++){
        if(arr[i] !== 0){
            arr[indx] = arr[i];
            indx++;
        }
    }

    for(var i = indx;i<arr.length;i++){
        arr[i] = 0;
    }
    return arr;
};

console.log(moveZeroes2([0,1,0,3,12]));
moveZeroes2([12,1,0,3,12]);


function moveZeroes3(arr){
    let count = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0){
            count++
        }
    }
    for(let i =0;i<count;i++){
        arr.push(0)
    }
    for(let i =0;i<arr.length-count;i++){
        if(arr[i]===0){
            arr.splice(i,1)
        }
    }
    return arr
}

console.log(moveZeroes3([0,1,0,3,12]))