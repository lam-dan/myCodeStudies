// Map is collection of elements where each element is stored as a Key, value pair.
// Map object can hold both objects and primitive values as either key or value
// When we iterate over the map object, it returns the key, value pair in the same order as inserted
// Maps are an array of arrays where each of the arrays contain key, value pair.

// INTRODUCTION
// map1 contains an array of arrays where each of the arrays contain key, value pair of numbers
// 1 => 2 
// 2 => 3 
// 4 -> 5 
var map1 = new Map([[1 , 2], [2 ,3 ] ,[4, 5]]); 
console.log("Map1",map1);

// map2 contains an array of arrays where each of the arrays contain key, value pair of strings
// firstname => sumit 
// lastname => ghosh 
// website => geeksforgeeks 
var map2 = new Map([["firstname" ,"sumit"], 
		["lastname", "ghosh"], ["website", "geeksforgeeks"]]); 

console.log("Map2", map2);


// map3 contains an array of arrays where each of the arrays contain key, value pair of a string as a key, and an array of numbers as the value pair.
// Whole number => [1, 2, 3, 4] 
// Decimal number => [1.1, 1.2, 1.3, 1.4] 
// Negative number => [-1, -2, -3, -4] 
var map3 = new Map([["whole numbers", [1 ,2 ,3 ,4]], 
			["Decimal numbers" , [1.1, 1.2, 1.3, 1.4]], 
			["negative numbers", [-1, -2, -3, -4]]]); 

console.log("Map3", map3);


// map 4 contains 
// storing arrays both as key and value 
// "first name ", "Last name" => "sumit", "ghosh" 
// "friend 1", "sourav" => "friend 2", "gourav" 
var map4 = new Map([[["first name", "last name"], 
			["sumit", "ghosh"]], 
			[["friend 1", "friend 2"], 
			["sourav","gourav"]]]); 

console.log("Map4", map4);


// GETTERS, SETTERS, HAS, and DELETE for Maps
// .set
// .get

// Using Map.prototype.set(k, v) 
// creating an empty map 
var map1 = new Map(); 

// adding some elements to the map 
map1.set("first name", "sumit"); 
map1.set("last name", "ghosh"); 
map1.set("website", "geeksforgeeks") 
	.set("friend 1","gourav") 
	.set("friend 2","sourav"); 

// map1 contains 
// "first name" => "sumit" 
// "last name" => "ghosh" 
// "website" => "geeksforgeeks" 
// "friend 1" => "gourav" 
// "friend 2" => "sourav" 
console.log(map1); 
	
// Using Map.prototype.has(k) 

// retuns true 
console.log("map1 has website ? "+ 
					map1.has("website")); 

// return false 
console.log("map1 has firend 3 ? " + 
					map1.has("friend 3")); 
	

// Using Map.prototype.get(k) 

// returns geeksforgeeks 
console.log("get value for key website "+ 
					map1.get("website")); 

// returns undefined 
console.log("get value for key friend 3 "+ 
					map1.get("friend 3")); 

// Using Map.prototype.delete(k) 

// removes key "website" and its value from 
// the map 
// it prints the value of the key 
console.log("delete element with key website "
					+ map1.delete("website")); 
	
// as the value is deleted from 
// the map hence it returns false 
console.log("map1 has website ? "+ 
					map1.has("website")); 

// returns false as this key is not in the list 
console.log("delete element with key website " + 
					map1.delete("friend 3")); 


// Using Map.prototype.clear() 
// removing all values from map1 
map1.clear(); 

// map1 is empty 
console.log(map1); 

// creating an empty map 
var map1 = new Map(); 

// adding some elements to the map 
map1.set("first name", "sumit"); 
map1.set("last name", "ghosh"); 
map1.set("website", "geeksforgeeks") 
	.set("friend 1","gourav") 
	.set("friend 2","sourav"); 


// Using Map.prototype.entries() 

// getting all the entries of the map 
var get_entries = map1.entries(); 


// it prints 
// ["first name", "sumit"] 
// ["last name", "ghosh"] 
// ["website", "geeksforgeeks"] 
// ["friend 1", "gourav"] 
// ["friend 2", "sourav"] 
console.log("----------entries---------"); 
for(var ele of get_entries) 
console.log(ele); 

// Using Map.prototype.keys() 

// getting all the keys of the map 
var get_keys = map1.keys(); 

// it prints 
// "first name", "last name", 
// "website", "friend 1", "friend 2" 
console.log("--------keys----------"); 
for(var ele of get_keys) 
console.log(ele); 

// Using Map.prototype.values() 

// getting all the values of the map 
var get_values = map1.values(); 

// it prints all the values 
// "sumit", "ghosh", "geeksforgeeks" 
// "gourav", "sourav" 
console.log("----------values------------"); 
for(var ele of get_values) 
console.log(ele); 

// using Map.prototype.forEach() 
// creating an empty map 
var map1 = new Map(); 

// adding some elements to the map 
map1.set("first name", "sumit"); 
map1.set("last name", "ghosh"); 
map1.set("website", "geeksforgeeks") 
	.set("friend 1", "gourav") 
	.set("friend 2", "sourav"); 

// Declaring a call back function 
// we are using only one parameter value 
// so it will ignore other two . 
function printOne(values) 
{ 
console.log(values); 
} 

// It prints value of all the element 
// of the set 
console.log("-----one parameter-----"); 
map1.forEach(printOne); 

// Declaring a call back function 
// we are using two parameter value 
// so it will ignore last one 
function printTwo(values, key) 
{ 
console.log(key + " " + values); 
} 

// As key and values are same in set 
// so it will print values twice 
console.log("-----two parameter-----"); 
map1.forEach(printTwo); 

// Declaring a call back function 
// we are using all three parameter value 
function printThree(values, key, map) 
{ 
// it will print key and value 
// and the set object 
console.log(key + " " + values); 
console.log(map); 
} 

// It prints key and value of each 
// element and the entire Map object 
console.log("-----three parameter-----"); 
map1.forEach(printThree); 

// using Map.prototype[@@iterator]() 
// creating an empty map 
var map1 = new Map(); 

// adding some elements to the map 
map1.set("first name", "sumit"); 
map1.set("last name", "ghosh"); 
map1.set("website", "geeksforgeeks") 
	.set("friend 1", "gourav") 
	.set("friend 2", "sourav"); 

// By default this method returns the 
// same iterator object return by entires methods 
var getit = map1[Symbol.iterator](); 

// it prints 
// ["first name", "sumit"] 
// ["last name", "ghosh"] 
// ["website", "geeksforgeeks"] 
// ["friend 1", "gourav"] 
// ["friend 2", "sourav"] 
for(var elem of getit) 
	console.log(elem); 

