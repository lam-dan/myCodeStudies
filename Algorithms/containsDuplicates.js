//Given an array of integers, find if the array contains any duplicates
//Your function should return true if any value appears at least twice in the array, and it should return
// false if every element is distinct

// function containsDuplicates (arr){
//     var dict = {};
//     for( var i = 0; i< arr.length; i++){
//         if(dict[arr[i]]){
//             dict[arr[i]]++;
//         } else {
//             dict[arr[i]] = 1;
//         }
//         if(dict[arr[i]] == 2){
//             return true;
//         } 
//     }
//     return false;
// }

// containsDuplicates([1,2,3,1]);

//O(N)
function containsDuplicates (arr){
        var dict = {};
        for( var i = 0; i< arr.length; i++){
            if(dict[arr[i]]){
                dict[arr[i]]++;

                if(dict[arr[i]] == 2){
                    return true;
                } 
            } else {
                dict[arr[i]] = 1;
            }

        }
        return false;
    }
    
    containsDuplicates([1,2,3,1]);

//ES6 Method
//Sets are a collection items which are unique and ordered so they can be iterated
//similar to an array but unique values only
//They can store any types of values whether primitive or objects
//Ex: var set = new Set([1,1,2,3,4]);
//console.log(set) = [1,2,3,4]

//O(N) solution, we are creating a set and doing a for loop on the array
//and an if statement inside the for loop so that if the set finds 
//a second valule from the array we will return true otherside add it
//to the set. This makes it so that we do not have to iterate through the 
//full array of items as it returns true as soon as it finds a duplicate
var containsDuplicate = function(nums) {
    var set = new Set();
    for (var i=0; i < nums.length; i++) {
      if (set.has(nums[i])) return true;
      set.add(nums[i]);
    }
    return false;
  };
  
  console.log(containsDuplicate([10,20,30,40,50]));