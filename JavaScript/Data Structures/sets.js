// A set is a collection of elements which are unique, no element can be repeated
// Set in ES6 are ordered: elements of the set can be iterated in the insertion order
// Set can store any types of values whether primitive or objects.
// Sets are dictionaries in ES6 with unique values.
// New sets are empty dictionaries

// If you put an array of elements in a set, you get list of unique elements in a dictionary.
// ["sumit","amit","anil","anish"] 
var set1 = new Set(["sumit","sumit","amit","anil","anish"]); 
console.log("Set1",set1);

// Strings in Sets are broken down by the unqiue character of the string in a dictionary
// it contains 'f', 'o', 'd' 
var set2 = new Set("fooooooood"); 
console.log("Set2",set2);

// it contains [10, 20, 30, 40] 
var set3 = new Set([10, 20, 30, 30, 40, 40]); 
console.log("Set3",set3);

// it is an empty set 
var set4 = new Set(); 
console.log("Set4",set4);


// Adding Values

// You can add elements in a set 

// using Set.prototype.add(value) 
// creating an empty set 
var set5 = new Set(); 

// set contains 10, 20 
set5.add(10); 
set5.add(20); 

// As this method returns 
// the set object hence chanining 
// of add method can be done. 
set5.add(30).add(40).add(50); 

// prints 10, 20, 30, 40, 50 
console.log("Adding Set5",set5); 

// Deleting Values
// You can delete elements from the sets built in method.

// using Set.protoype.delete(value) 
// creating set it contains 
// f, o , d, i, e 
var set6 = new Set("foooodiiiieee"); 

// deleting e from the set 
// it prints true 
console.log("Deleting values from set that exists",set6.delete('e'));

// set contains f, o, d, i 
console.log(set6); 

// deleting an element which is 
// not in the set 
// prints false 
console.log("Deleting Values from set that does not exist",set6.delete('g'));

// Clear Values in a set removes all the elements from the set
// Using Set.prototype.clear() 
// creating a set 
var set7 = new Set([10, 20, 30, 40, 50]); 

// prints {10, 20, 30, 40, 50} 
console.log("Before Clear",set7); 

// clearing set2 
set7.clear() 

// prints {} 
console.log("After Clear",set7); 

// Entries returns 
// Using Set.prototype.entries() 
// creating set 
var set8 = new Set(); 

// adding element to the set 
set8.add(50); 
set8.add(30); 
set8.add(40); 
set8.add(20); 
set8.add(10); 

// using entries to get iterator 
var getEntriesArry = set8.entries(); 

// each iterator is array of [value, value] 
// prints [50, 50] 

console.log("Set8",getEntriesArry.next().value); 

// prints [30, 30] 
console.log("Set8",getEntriesArry.next().value); 

// prints [40, 40] 
console.log("Set8",getEntriesArry.next().value); 

// prints [20, 20] 
console.log("Set8",getEntriesArry.next().value); 

// prints [10, 10] 
console.log("Set8",getEntriesArry.next().value); 

// .has() - return true if the specified value is present in the Set object

// Using Set.prototype.has() 
// creating set 
var set9 = new Set(); 

// adding element to the set 
set9.add(50); 
set9.add(30); 

console.log("Set9",set9);

// prints true 
console.log("Checking to see if set has 50",set9.has(50)); 

// prints false 
console.log("Checking to see if set has 10",set9.has(10)); 

// .values() - returns all the values from the Set in the same insertion order
// .keys() - returns all the values from the Set in the same insertion order

// Using Set.prototype.values() 
// Using Set.prototype.keys() 
// creating set 
var set10 = new Set(); 

// adding element to the set 
set10.add(50); 
set10.add(30); 
set10.add(40); 
set10.add("Geeks"); 
set10.add("GFG"); 

// getting all the values 
var getValues = set10.values(); 

// prints a SetIterator 
// that contains {50, 30, 40, "Geeks", "GFG"} 
console.log(getValues); 

// getting all the values 
var getKeys = set10.keys(); 

// prints a SetIterator 
// that contains {50, 30, 40, "Geeks", "GFG"} 
console.log(getKeys); 

// .forEach(callback[,thisarguement]);

// Using Set.prototype.forEach(callback[, thisarg]) 
// creating set 
var set11 = new Set(); 

// adding element to the set 
set11.add({Firstname: "Sumit", Lastname: "Ghosh"}); 
set11.add(50); 
set11.add(30); 
set11.add(40); 
set11.add("Geeks"); 
set11.add("GFG"); 

console.log("Set11",set11);

// Declaring a call back function 
// we are using only one parameter value 
// so it will ignore other two . 
// function printOne(values) 
// { 
// 	console.log("Inside Method printOne",values); 
// } 

// It prints value of all the element 
// of the set 
// set11.forEach(printOne); 

// Declaring a call back function 
// we are using two parameter value 
// so it will ignore last one 
// function printTwo(key, values) 
// { 
// 	console.log("Inside printTwo method",key+" "+values); 
// } 

// As key and values are same in set 
// so it will print values twice 
// set11.forEach(printTwo); 

// Declaring a call back function 
// we are using all three parameter value 
function printThree(key, values, set) 
{ 
	// it will print key and value 
	// and the set object 
				
	console.log("Inside printThree",key+" "+values); 
	console.log("Inside printThree set",set); 
} 

// It prints key and value of each 
// element and the entire set object 
set11.forEach(printThree); 

// [Symbol.iterator]() - returns a Set iterator function which is values() function by default

// using Set.protoype[@@Iterator]() 
var set12 = new Set(["sumit","sumit","amit","anish"]); 

var getit = set12[Symbol.iterator](); 

// Printing the values in the 
// iterator "getit" 

// prints {value: "sumit", done: false} 
console.log(getit.next()); 

// prints {value: "amit", done: false} 
console.log(getit.next()); 

// prints {value: "anish", done: false} 
console.log(getit.next()); 

// prints {value: undefined, done: true} 
console.log(getit.next()); 

// .subSet() returns true if Set A is a subset of Set B

// check whether the set on which the 
// method is invoked is the subset of 
// otherset or not 
Set.prototype.subSet = function(otherSet) 
{ 
	// if size of this set is greater 
	// than otherSet then it can'nt be 
	// a subset 
	if(this.size > otherSet.size) 
		return false; 
	else
	{ 
		for(var elem of this) 
		{ 
			// if any of the element of 
			// this is not present in the 
			// otherset then return false 
			if(!otherSet.has(elem)) 
				return false; 
		} 
		return true; 
	} 
} 

// using the subSet function 

// Declaring different sets 
var setA = new Set([10, 20, 30]); 
var setB = new Set([50, 60, 10, 20, 30, 40]); 
var setC = new Set([10, 30, 40, 50]); 

// prints true 
console.log(setA.subSet(setB)); 

// prints false 
console.log(setA.subSet(setC)); 

// prints true 
console.log(setC.subSet(setB)); 

// union() - returns a set which consists of union of Set A and Set B

// Perform union operation between 
// called set and otherSet 
Set.prototype.union = function(otherSet) 
{ 
	// creating new set to store union 
	var unionSet = new Set(); 

	// iterate over the values and add 
	// it to unionSet 
	for (var elem of this) 
	{ 
		unionSet.add(elem); 
	} 

	// iterate over the values and add it to 
	// the unionSet 
	for(var elem of otherSet) 
		unionSet.add(elem); 

	// return the values of unionSet 
	return unionSet; 
} 

// using the union function 
// Declaring values for set1 and set2 
var set1 = new Set([10, 20, 30, 40, 50]); 
var set2 = new Set([40, 50, 60, 70, 80]); 

// performing union operation 
// and storing the resultant set in 
// unionSet 
var unionSet = set1.union(set2); 

// prints [10, 20, 30, 40, 50, 60, 70, 80] 
console.log(unionSet.values()); 

// intersection() it returns the intersection of Set A and Set B
// A set is said to be an intersection of Set A and B if contains elements which is present in both Set A and Set B

// Performs intersection operation between 
// called set and otherSet 
Set.prototype.intersection = function(otherSet) 
{ 
	// creating new set to store intersection 
	var intersectionSet = new Set(); 

	// Iterate over the values 
	for(var elem of otherSet) 
	{ 
		// if the other set contains a 
		// similar value as of value[i] 
		// then add it to intersectionSet 
		if(this.has(elem)) 
			intersectionSet.add(elem); 
	} 

// return values of intersectionSet 
return intersectionSet;				 
} 
// using intersection function 
// Declaring values for set1 and set2 
var interset1 = new Set([10, 20, 30, 40, 50]); 
var interset2 = new Set([40, 50, 60, 70, 80]); 

// performing union operation 
// and storing the resultant set in 
// intersectionset 
var intersectionSet = interset1.intersection(interset2); 

// prints {40, 50} 
console.log(intersectionSet.values()); 

// .difference() - returns a Set which contains difference of Set A and Set B
// A set is said to be a difference of Set A and B if it contains set of element e which are present in Set A but not in Set B

// Performs difference operation between 
// called set and otherSet 
Set.prototype.difference = function(otherSet) 
{ 
	// creating new set to store differnce 
	var differenceSet = new Set(); 

	// iterate over the values 
	for(var elem of this) 
	{ 
		// if the value[i] is not present 
		// in otherSet add to the differenceSet 
		if(!otherSet.has(elem)) 
			differenceSet.add(elem); 
	} 

	// returns values of differenceSet 
	return differenceSet; 
} 

// using difference function 
// Declaring values for set1 and set2 
var diffset1 = new Set([10, 20, 30, 40, 50]); 
var diffset2 = new Set([40, 50, 60, 70, 80]); 

// performing union operation 
// and storing the resultant set in 
// intersectionset 
var differenceSet = diffset1.difference(diffset2); 

// prints {10, 20, 30} 
console.log(differenceSet); 


