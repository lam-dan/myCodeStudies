// Given two positive integers X and Y, and an array arr[] of positive integers. 
// We need to find the longest prefix index which contains an equal number of X and Y. 
// Print the maximum index of largest prefix if exist otherwise print -1.

function largestPrefix(array, prefixOne, prefixTwo) {
    let prefixOneCounter = 0;
    let prefixTwoCounter = 0;
    let result = -1;

    for (let i = 0; i < array.length; i++) {
        if(array[i] == prefixOne){
            prefixOneCounter++;
        }
        if(array[i] == prefixTwo){
            prefixTwoCounter++;
        }
        if(prefixOneCounter != 0 && prefixOneCounter === prefixTwoCounter){
            result = i;
        }
    }

    return result;

}

console.log(largestPrefix([7, 42, 5, 6, 42, 8, 7, 5, 3, 6, 7],7,42))