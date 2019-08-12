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