// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

function maxNumberOfBalloons(string) {

    let dict = { 'b': 0, 'a': 0, 'l': 0, 'o': 0, 'n': 0 };

    for (let i = 0; i < string.length; i++) {
        if (dict[string[i]] !== undefined) {
            dict[string[i]]++;
        }
    }

    let oneMin = Math.min(dict['b'], dict['a'], dict['n']);
    let twoMin = Math.floor(Math.min(dict['l'] / 2, dict['o'] / 2));

    return Math.min(oneMin, twoMin);
};

console.log(maxNumberOfBalloons("loonbalxballpoon"))