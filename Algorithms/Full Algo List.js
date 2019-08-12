//#1 determine if all charcters are unique
//log n time complexity

function isUniqueChar(str){
	var dict = {};
	for(var i = 0; i< str.length; i++){
		if(dict[str[i]] == 0){
			return false;
		}else{
			dict[str[i]] = 0;
		}
	}
	return true;
}

console.log(isUniqueChar("hello"));

console.log(isUniqueChar("helo"));

//brute force
function isUniqueCharBrute(string){
	for(var i = 0; i< string.length; i++){
		for(var j = i+1; j< string.length; j++){
			if(string.charAt(i)===string.charAt(j)){
				return false;
			}
		}
	}
	return true;
}

console.log(isUniqueCharBrute("hello"));

console.log(isUniqueCharBrute("helo"));

//given two strings write a method to determine permutation of the other.
//permutation - order does not matter, combination - order does matter

// function isPermutation(str1,str2){
// 	var dict = {};
// 	var dict2 = {};

// 	for(var i = 0; i <str1.length; i++){
// 		dict[str1[i]]=charAt.str1[i];
// 	}

// 	for(var i = 0; i < str2.length; i++){
// 		dict2[str2[i]]=charAt.str2[i];
// 	}

// 	for(key1 in dict){

// 		for (key2 in dict2){

// 			if (key2 == key2){
// 				return true;
// 			}
// 			else return false;
// 		}

// 	}

// dict1 = {'h':0,"e":-1}

// str = 'hello'
// str2 = 'olleh'

function isPermutation(str1,str2){
	if(str1.length != str2.length){
		return false;
	}

	var dict = {};


	for(var i = 0; i<str1.length; i++){

		if(dict[str1[i]]){
			dict[str1[i]] += 1;
		}else{
			dict[str1[i]] = 1;
		}
	}

	for(var j = 0; j <str2.length;j++){

		if(dict[str2[j]]){
			dict[str2[j]] -= 1;
		}else{
			return false;
		}
	}

	for(var k in dict){

		if(dict[k] != 0){
			return false;
		} 
	}

	return true;

}

console.log("Permnutation Solution: "+isPermutation('hello','nlleh'));

// console.log(isPermutation("hello","olleh"));

//1. Add a key with your name 
//2. Remove key 2 from dictiary 1
//3. check if your name in dictionary 1
//4. look through dictionary 1 keys and check if dictionary 2 key has the value, return the value

dict1 = {"word":10, "key2":3};

//1

dict1['name'] = 'daniel';

console.log(dict1);

//2

delete dict1['key2'];

console.log(dict1);

//3 if you see value of daniel, return true

function checkDictValue(){

	for(i in dict1){

		if ( dict1[i] == 'daniel'){
			return true;
		}else{
			false
		}

	}
}

console.log(checkDictValue());

//4



//1 permutations vs combinations

dict1 = {"word":10, "key2":3};
dict2 = {"name": "name", "key3":2, "word":1}

function checkDict1ValueInDict2(){

	for(i in dict1){

		if( i == "word"){

			if(dict2[i] == null){

				return false;
			}else{
				return dict2[i];
			}

		}
	}
}

console.log(checkDict1ValueInDict2());

//URLify write a method to replace all spaces in a string with '%20'. You may assume that the string
//has sufficient space at the end to hold the additional characters, and that you are given the "true"
//length of the string.
//cannot create new string


function urlLify(str,length){

	var str = str.substring(0,length);
	var words = str.split(" ");
	str = words.join('%20');
	return str;
}



console.log(urlLify('Mr John Smith    ',13));

function URLify(str, trueLength) {

	let newString = '';

	for (var i = 0; i < trueLength; i++) {

		if (str[i] === ' ') 

			newString += '%20';

		else newString += str[i];

	}

	return newString;

}

console.log(urlLify('Mr John Smith    ',13));

//Palindrome Permutation, given a string, write a function to check if it is a permutation of a palindrome.
//A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement 
// of letters. The palindrome does not need to be limited to just dictionary words.
//Input: Tact Coa
//Output: True (permutations: "taco cat", "atco cta", etc.)
//O(N) Time -- Space

function palindromeChecker(str){

	str = str.replace(/\s/g,'');
	str = str.toLowerCase();
	console.log(str);

	dict = {};
	var count = 0;

	for(var i = 0; i < str.length; i ++){
		if(dict[str[i]]){
			dict[str[i]] += 1;
		}else{
			dict[str[i]] = 1;
		}
	}
	console.log(dict);
	for(var k in dict){
		if(dict[k]%2 == 1){
			count += 1;
		}
	}
	if (count <= 1){
		return true;
	}else{
		return false;
	}
}

console.log(palindromeChecker("Tactt Cca"));

// 0(N) TIME -- O(N) SPACE
function palindromePermutation(str) {
	if (!str) return false;
	str = str.toLowerCase();
	const letterMap = new Set();
	for (const letter of str) {
		if (letter !== ' ') {
			if (letterMap.has(letter)) letterMap.delete(letter);
			else letterMap.add(letter);
		}
	}
	return letterMap.size <= 1;
}

console.log(palindromePermutation("abba"));

//One Away: There are three types of edits that can be performed on strings:
//insert a character, remove a character, or replace a character.  Given two strings,
//write a function to check if they are one edit (or zero edits away).

function checkEdits(str1,str2){
	// var count = 0;
	if(Math.abs(str1.length - str2.length) > 1){
		return false;
	}
	// var isInsertion = str1.length < str2.length;

	// var isDeletedChar = str1.length > str2.length;

	let isEdited = false, i, x;

	for (i = x = 0; i < str1.length && x < str2.length; i++, x++) {

		if (str1[i] !== str2[x]) {

			if (isEdited){
				return false;
			}
			if (str1.length < str2.length){
				i--;
			} 
			else if (str1.length > str2.length){
				x--;	
			} 
			isEdited = true;
		}
	}
	return true;
}

console.log("Check Edits Below:");
console.log(checkEdits("pale","ple"));
console.log(checkEdits("pales","pale"));
console.log(checkEdits("pale","bale"));
console.log(checkEdits("pale","bae"));

//no dictionary on orders

function oneAway(str1, str2) {

	const str1Length = str1.length, str2Length = str2.length;

	if (Math.abs(str1Length - str2Length) > 1) 
		return false;

	const isInsertion = str1Length < str2Length,
	isDeletedChar = !isInsertion && str1Length !== str2Length;

	let isEdited = false, i, x;

	for (i = x = 0; i < str1Length && x < str2Length; i++, x++) {

		if (str1[i] !== str2[x]) {

			if (isEdited) return false;

			if (isInsertion) i--;

			else if (isDeletedChar) x--;

			isEdited = true;
		}
	}
	return true;
}

console.log("Check OneAway Below:");
console.log(oneAway("pale","ple"));
console.log(oneAway("pales","pale"));
console.log(oneAway("pale","bale"));
console.log(oneAway("pale","bae"));

//String Compression implement a method to perform basic string compression using the counts
//of repeated characters. For example, the string aabbcccccaaa would be come a2b1c5a3.  If the 
// "compressed" string would not become smaller than the original string, your method should return

function stringComp(str){
	if(str == undefined){
		return false;
	}
	if(str.length <= 2){
		return str;
	}
	var currentLetter = str[0];
	var count = 1;
	var str2 = str[0];
	for(var i = 1; i < str.length; i++){
		if(str[i] == currentLetter){
			count += 1;
		}else{
			str2 += count + str[i];
			currentLetter = str[i];
			count = 1;
		}
	}
	str2 += count; //for the last number

	if(str.length < str2.length){
		return str;
	}
	return str2;
}

console.log(stringComp("aabbcccccaaa"));





function stringCompression1(str) {
	if (!str || str.length <= 2) 
		return str;

	const charMap = new Map();
	let compressedString = ''; 
	currentLetter = str[0];

	for (const letter of str) {
		if (letter === currentLetter) {
			charMap.set(letter, charMap.get(letter) + 1 || 1);
		} else {
			compressedString += currentLetter + charMap.get(currentLetter);
			charMap.clear();
			currentLetter = letter;
			charMap.set(letter, 1);
		}
	}
	compressedString += [...charMap][0].join``;
	return compressedString.length < str.length ? compressedString : str;
}


console.log(stringCompression1("aabbcccccaaa"));


//array = [1,2,2,5,8] 5 combinations

//Abbeh
//aveh
//Abyh
//Lbeh
//Lyh
//time complexity vs space complexity

// arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// dict = {
// 	a: 1,
// 	b: 2,
// 	e: 1,
// 	h: 1
// }

arr = [1,2,2,5,8];

function findCombos(arr){

	var dict = {};

}

//1.7 Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image
//is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

function rotateMatrix(matrix) {
	if (!matrix || !matrix.length){
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

function rotateMatrix2(matrix){

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

var number = Math.floor((Math.random()*1000)+1);
var name = "Guest";

console.log(number.toString().length);

if(number.toString().length < 3){
	console.log(name+"0"+number);
}else{
	console.log(name+number);
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