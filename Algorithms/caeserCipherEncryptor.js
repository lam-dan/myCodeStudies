// Given a non-empty string of lowercase letters and a non-negative integer value value representing a key, write a function
// that return a new string obtained by shifting every letter in the input string by k positions in the alphabet
// where k is the key. Note that letters should "wrap" around the alphabet; in other words, the letter "z" shifted by 1
// returns the letter "a"
// Input: "xyz",2
// Output: "zab"

// Solution #1:
// Time: O(n) - where n is the length of the string input
// Space: O(n) - where n is the length of the string input

function caesarCipherEncryptor(string,key){
        const newLetters = [];
        const newKey = key%26
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        for(let i =0; i<string.length; i++) {
            const newLetterCode = alphabet.indexOf(string[i])+ newKey;
            newLetters.push(newLetterCode <= 25 ? alphabet[newLetterCode] : alphabet[-1+newLetterCode%25])
        }
        return newLetters.join('');
    }


console.log(caesarCipherEncryptor('xyz', 2));