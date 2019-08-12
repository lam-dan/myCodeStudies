//1.7 Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image
//is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

function rotateMatrix(matrix) {
	if (!matrix || !matrix.length) {
		return false;
	}
	var len = matrix.length;

	console.log(matrix.length);

	for (var layer = 0; layer < len / 2; layer++) {

		var firstLayer = layer,

			lastLayer = len - 1 - layer;

		for (var i = layer; i < lastLayer; i++) {

			var offset = i - layer,

				top = matrix[firstLayer][i];

			// left -> top
			matrix[firstLayer][i] = matrix[lastLayer - offset][firstLayer];
			// bottom -> left
			matrix[lastLayer - offset][firstLayer] = matrix[lastLayer][lastLayer - offset];
			// right -> bottom
			matrix[lastLayer][lastLayer - offset] = matrix[i][lastLayer];
			// top -> right
			matrix[i][lastLayer] = top;
		}
	}
	return matrix;
}

function rotateMatrix2(matrix) {

	console.log(matrix);
	var temp;



	// console.log(matrix[0][0]);

	// console.log(matrix[3][0]);

	// for(var i = 0; i<matrix.length;i++ ){

	temp1 = matrix[0][1];
	temp2 = matrix[0][2];
	temp3 = matrix[0][3];

	temp0 = matrix[0][0];
	matrix[0][0] = matrix[3][0];
	matrix[0][1] = matrix[2][0];
	matrix[0][2] = matrix[1][0];
	matrix[0][3] = temp1;

	// matrix[3][0] = temp;

	// }

	console.log(matrix);
}


const matrix4X4 = [
	[1, 2, 3, 4],
	[12, 13, 14, 5],
	[11, 16, 15, 6],
	[10, 9, 8, 7]
];

// const matrix5X5 = [
// [1, 2, 3, 4, 5],
// [15, 25, 26, 19, 6],
// [15, 24, 27, 20, 7],
// [14, 23, 22, 21, 8],
// [13, 12, 11, 10, 9]
// ];

// console.log(rotateMatrix(matrix4X4));
rotateMatrix2(matrix4X4);
// console.log(rotateMatrix(matrix5X5));

var number = Math.floor((Math.random() * 1000) + 1);
var name = "Guest";

console.log(number.toString().length);

if (number.toString().length < 3) {
	console.log(name + "0" + number);
} else {
	console.log(name + number);
}


// }else{
// 	console.log(number);
// 	// name = name+number;
// }

// console.log("0"+number);

// var newNUmber = name+"0";



// console.log(number);


// var name = name+number;

// console.log(name);