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