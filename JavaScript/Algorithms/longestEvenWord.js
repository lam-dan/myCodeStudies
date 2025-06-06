// Given a sentence, return the longest even word

// Time Complexity: O(n)
// Space Complexity: O(1)
function findLongestWord(str) {
  var wordsArray = str.split(' ');
  var longestWord = 0;
  let results = ''
  for (var i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length % 2 === 0) {
      if (wordsArray[i].length > longestWord) {
        results = '';
        longestWord = wordsArray[i].length;
        results += wordsArray[i];
      }
    }
  }
  return results;
}
console.log(findLongestWord('It is a pleasant day today'));
const longestWord = (str) => str.split(' ').filter(v => !(v.length % 2))
                                           .sort((a,b) => b.length - a.length)[0];
console.log(longestWord('It is a pleasant day today'));
