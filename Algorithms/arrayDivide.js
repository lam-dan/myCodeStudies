// Given an array and a number return a new array
// with nested arrays of that multiple, and the elements of the original array
// If the remaining relements, are less than the number, then do not push them in a
// nested array
// Input: [1,2,3,4,5,6,7,8],3
// Output: [[1,2,3],[4,5,6],7,8]
// Time Complexity: O(n)
// Space Complexity: O(1)

// function arrayDivide(array,int){
//     const result = [];
//     let newArray = [];
//     let position = array.length;
//     // console.log(position)
//     let count = 0;
//     const stop = array.length%int;
//     // console.log(stop)
//     for( let i = 0; i<array.length;i++){
//         if(position === stop){
//             break
//         }
//         if(count<int){
//             newArray.push(array[i])
//             count++;
//         }
//         if(count === int){
//             result.push(newArray);
//             newArray = [];
//             count = 0;
//         }
//         position --;
//     }
//     for(let i = 0;i<stop;i++){
//         result.push(array[array.length-stop+i])
//     }
//     return result;
// }

// console.log(arrayDivide([1,2,3,4,5,6,7,8],3));

function arrayDivide(array,int){
    const result = [];
    let newArray = [];
    // console.log(position)
    let count = 0;
    let remainder = array.length%int;
    const stop = array.length - remainder;
    // console.log(stop)
    for( let i = 0; i<array.length;i++){
        if(i === stop){
            break
        }
        if(count<int){
            newArray.push(array[i])
            count++;
        }
        if(count === int){
            result.push(newArray);
            newArray = [];
            count = 0;
        }
    }
    for(let i = 0;i<remainder;i++){
        result.push(array[stop+i])
    }
  
  return result;
}

console.log(arrayDivide([1, 2, 3, 4, 5, 6, 7, 8], 3));
