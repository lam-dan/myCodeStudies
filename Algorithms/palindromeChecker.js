//Palindrome Permutation, given a string, write a function to check if it is a permutation of a palindrome.
//A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement
// of letters. The palindrome does not need to be limited to just dictionary words.
//Input: Tact Coa
//Output: True (permutations: "taco cat", "atco cta", etc.)
//O(N) Time -- Space

// #1 Solution Brute Force

// Time Complexity: O(n^2), when we build up a new string and we use concatentation through += string[i],
// it creates that new string and iterates through all the values of the new string and adds string[i]
// because of that this turns into an O(n^2) algorithm, so we're doing O(n) operations on the string and we're doing
// n of them since we're iterating through each character of the string.

// Space Complexity: O(n) space - where n is the length of the input string. We're basically creating
// a new string of the same length as our input string.
// function palindromeChecker(string) {
//   let reversedString = '';
//   for (let i = string.length - 1; i >= 0; i--) {
//     reversedString += string[i];
//   }
//   return string === reversedString;
// }

// console.log(palindromeChecker('ana'));

//#2 Solution

// Time Complexity: O(n)

// Space Complexity: O(n)
// function palindromeChecker(string) {
//   const reversedChars = [];
//   for (let i = string.length - 1; i >= 0; i--) {
//     reversedChars.push(string[i]);
//   }
//   return string === reversedChars.join('');
// }

// console.log(palindromeChecker('ana'));

//#3 Solution Recursion

// Time Complexity: O(n)

// Space Complexity: O(n)  All the function calls that we keep storing in the call stack
function palindromeChecker(string, i = 0) {
  const j = string.length - 1 - i;
  return i >= j
    ? true
    : string[i] === string[j] && palindromeChecker(string, i + 1);
}

console.log(palindromeChecker('ana'));

// # 4 BEST Solution - 2 pointers with while loop
function palindromeChecker(string) {
  string = string.replace(/[^a-zA-Z0-9]/gm,"").toLowerCase();
  let leftIdx = 0;
  let rightIdx = string.length - 1;
  while (leftIdx < rightIdx) {
    if (string[leftIdx] !== string[rightIdx]) {
      return false;
    }
    leftIdx += 1;
    rightIdx -= 1;
  }
  return true;
}

console.log(palindromeChecker('ana'));

// LeetCode answer
function isPalindrome (string) {
  string = string.replace(/[^a-zA-Z0-9]/gm,"").toLowerCase();
  let middle = Math.floor(string.length/2);
  let length = string.length;
  for(let i=0;i<middle;i++) {
      if(string[i] !== string[length-1-i]) {
          return false
      }
  }
  return true;
};
console.log(isPalindrome('abccba'));

// function palindromeChecker(str) {
//   str = str.replace(/\s/g, '');
//   str = str.toLowerCase();
//   console.log(str);

//   dict = {};
//   var count = 0;

//   for (var i = 0; i < str.length; i++) {
//     if (dict[str[i]]) {
//       dict[str[i]] += 1;
//     } else {
//       dict[str[i]] = 1;
//     }
//   }
//   console.log(dict);
//   for (var k in dict) {
//     if (dict[k] % 2 == 1) {
//       count += 1;
//     }
//   }
//   if (count <= 1) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(palindromeChecker('Tactt Cca'));

// // 0(N) TIME -- O(N) SPACE
// function palindromePermutation(str) {
//   if (!str) return false;
//   str = str.toLowerCase();
//   const letterMap = new Set();
//   for (const letter of str) {
//     if (letter !== ' ') {
//       if (letterMap.has(letter)) letterMap.delete(letter);
//       else letterMap.add(letter);
//     }
//   }
//   return letterMap.size <= 1;
// }

// console.log(palindromePermutation('abba'));
