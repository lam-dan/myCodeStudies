// Step 1: Create a new Object
var dict = new Object();
 
// or the shorthand way
var dict = {};

//You can also initialize the Dictionary with Key/Value pairs when creating it if you are using the shorthand method.

var dict = {
  FirstName: "Chris",
  "one": 1,
  1: "some value"
};

// Step 2: Populate Values on the Object

// This can be done by either setting the values using the Object's Indexer property, 
// or just calling it directly as if it were a standard property on the object. 
// As you'll see below the Key values can be any object and are not limited to Strings.

// using the Indexer
dict["one"] = 1;
dict[1] = "one";
 
// direct property by name
// because it's a dynamic language
dict.FirstName = "Chris";

// Iterating Key/Value Pairs
// A simple JavaScript "for" loop can be used to iterate through your new dictionary.

for(var key in dict) {
  var value = dict[key];
 
  // do something with "key" and "value" variables
 
}

// Access Key/Value Pairs Directly
// The Key/Value pairs can be accessed directly on the dictionary Object either 
// through the indexer or as if it's directly a property on the object.

// using indexer
var name = dict["FirstName"];
 
// as property
var name = dict.FirstName;

// Functions can be Key or Value Too!
// Since JavaScript is a functional language, functions are objects too. 
// As a result, Functions can also be used as either Key and/or Value on your dictionary. 
//For the Dictionary Key, this really does make sense since the Dictionary is really just an Object which can have functions/methods on it. 
//However using Functions as the value may not be the most obvious for developers most comfortable with non-functional programming languages.
// Here are some examples of using a Function in both Key and Value of a Dictionary:

var dict = {};
 
var f = function() {
  // do something
};
 
// setup Function as Value
dict['method'] = f;

console.log('dict["method"]',dict)
 
// setup Function as Key
dict[f] = 'some value';
console.log('dict[f]',dict)


// execute Function from Value
dict['method']();
console.log("Execute Function from Value",dict)


var method = dict.method;
method();


// get value for Key
var val = dict[f];


