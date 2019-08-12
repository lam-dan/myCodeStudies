//given two strings write a method to determine permutation of the other.
//permutation - order does not matter, combination - order does matter

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

console.log("Permutation Solution: "+isPermutation('hello','nlleh'));

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