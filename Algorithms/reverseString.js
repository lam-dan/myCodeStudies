// simple benchmark for reversing a string in js - source https://medium.com/quick-code/5-ways-to-reverse-a-string-in-javascript-466f62845827
function reverseFor(str){
  let reversed = "";    
  for (var i = str.length - 1; i >= 0; i--){        
    reversed += str[i];
  }    
  return reversed;
}
function reverseArray(str){
  return str.split("").reverse().join("");
}
function reverseSpread(str){
  return [...str].reverse().join('');
}
function reverseReduce(str){
  return str.split("").reduce((rev, char)=> char + rev, ''); 
}


function reverserecursion(str){
 if(str === ""){
  return str 
 }else{
  return reverserecursion(str.substr(1)) + str[0]
 }
}

let string = 'hello world'
let iterations = 100000
let bmarkData = [
	{
		'function': reverseFor,
		'name': 'reverseFor',
		'time': 0
	},
	{
		'function': reverseArray,
		'name': 'reverseArray',
		'time': 0
	},
	{
		'function': reverseSpread,
		'name': 'reverseSpread',
		'time': 0
	},
	{
		'function': reverseReduce,
		'name': 'reverseReduce',
		'time': 0
	},
	{
		'function': reverserecursion,
		'name': 'reverserecursion',
		'time': 0
	},
]
bmarkData.forEach((data) => {
	let before = Date.now()
	for (let i = 0; i < iterations; i++) {
		data.function(string)
	}
	let after = Date.now()
	data.time = (after - before)
})

console.log(bmarkData)