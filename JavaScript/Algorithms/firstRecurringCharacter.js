//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//brute force approach O(n^2)
function firstRecurringCharacter(arr){
  if(!arr.length){
    return false;
  }
  for(var i = 0; i < arr.length; i ++){
    for( var  j = i+1; j <arr.length; j++){
      if( arr[i] == arr[j]){
        return arr[i];
      }
    }
  }
  return undefined;
}

// console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4]));

//Time: O(n), Space Complexity: O(1),Hash Tables
function firstRecurringCharacter2(arr){
  let map = {};
  for(let i = 0; i < arr.length; i++){

    if(map[arr[i]] !== undefined){
      return arr[i];
    } else {
      map[arr[i]] = i;
    }
    console.log(map);
  }
  return undefined;
}

// console.log(firstRecurringCharacter2([2,5,1,2,3,5,1,2,4]));

console.log(firstRecurringCharacter2([2,5,5,2,3,5,1,2,4]));
//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2