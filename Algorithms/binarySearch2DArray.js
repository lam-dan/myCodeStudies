/**
 * Memo: Use BS to search, just need to calculate the index into a 2d array. Note that for matrix[i,j], it is (i-1)*n+j th element
 * Complex: O(log(mn))
 * Runtime: 125ms
 * Tests: 134 test cases passed
 * Rank: S
 */
var searchMatrix = function(matrix, target) {
    //# of rows, 3 total for each element in the array
    let row = matrix.length;
    //# of columns - 4 for the length of the first element
    let columns = matrix[0].length;
    //Start at the beginning of the 2D array
    let start = 0;
    let end = row * columns - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const i = Math.floor((mid / columns));
        const j = mid - i * columns;
        if (matrix[i][j] === target) {
            return true;
        } else if(matrix[i][j] < target) {
            start = mid + 1
        } else {
            end = mid - 1;
        }
    }
    return false;
};

console.log(searchMatrix(matrix = [
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
  ],
  target = 3));
