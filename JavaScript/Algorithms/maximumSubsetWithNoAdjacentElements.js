// Given an array of elements return the maximum sum of non adjacent elements
// Time Complexity - O(n) where n is the input length of the array
// Space Complexity- O(n) since we're creating a copy of the array
function maxSubsetSumNoAdjacent(array) {
    if (array.length === 0) {
        return false
    }
    if (array.length === 1) {
        return array[0];
    }
    const newArray = array.slice();
    newArray[1] = Math.max(array[0], array[1]);
    for (let i = 2; i < newArray.length; i++) {
        newArray[i] = Math.max(newArray[i - 1], newArray[i - 2] + newArray[i])
    }
    return newArray[newArray.length - 1];
}
console.log(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]));

// Time Complexity: O(n)
// Space Complexity: O(1)
function maxSubsetSumNoAdjacent(array) {
    if (array.length === 0) {
        return false
    }
    if (array.length === 1) {
        return array[0];
    }
    let second = array[0]
    let first = Math.max(array[0], array[1]);
    for (let i = 2; i < array.length; i++) {
        const current = Math.max(first, second + array[i])
        second = first;
        first = current;
    }
    return first;
}

console.log(maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135]));
