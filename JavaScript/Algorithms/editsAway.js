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