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


