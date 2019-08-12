function reverse(str){
  let reverseString = "";
  let lastStringIndex = str.length-1;
  
  for(var i = lastStringIndex;i > -1;i--){
    
    reverseString= reverseString + str[i];
  }
  return reverseString;
}

reverse('Daniel');

function reverse2(str){
  return str.split('').reverse().join('');
}

reverse2("Daniel");

// arrow function that takes an argument str and runs a method to return values
const reverse3 = str => str.split('').reverse().join('');

reverse3("Daniel");

// use "Spread" operator to take the string and convert it into an array, reverse the elements in the array, and join it back together into a string using join method

const reverse4 = str => [...str].reverse().join('');

reverse4("Daniel");