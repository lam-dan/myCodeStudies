// Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal,
// where a move is incrementing n - 1 elements by 1.
// Example:
// [1,2,3]

// [2,3,3]
// [3,4,3]
// [4,4,4]

// Solution: 1 Best Solution
// Time Complexity: O(n) We traverse each element in the array once.
// Space Complexity: O(1) No extra space is required.
// This approach is based on the idea that adding 1 to all the elements except one is equivalent to decrementing 1 from a single element,
// since we are interested in the relative levels of the elements which need to be equalized. Thus, the problem is simplified to find the
// number of decrement operations required to equalize all the elements of the given array. For finding this, it is obvious that we'll reduce
// all the elements of the array to the minimum element.
// First for loop finds the minimum.
// Second for loop, levels each of the elements down to the minium level, and the delta is added to the moves variable

let array = [2, 3, 6, 9]

function minMovesToEqualArrayElements(array) {
	let min = array[0]
	let moves = 0

	for (let i = 1; i < array.length; i++) {
		if (array[i] < min) {
			min = array[i]
		}
	}
	for (let i = 0; i < array.length; i++) {
		moves += array[i] - min
	}

	return moves
}

console.log(minMovesToEqualArrayElements(array))
