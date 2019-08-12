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
