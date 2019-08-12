//create a functions that takes the sen parameter being passed and return the largest word in the string
//if there are two or more words that are the same length, return the first word from the string with that length
//ignore punctuation and assume sen will not be empty
//Input:"fun&!! time"
//Output:"time"
//Input:"I love dogs"
//Output:"love"

function LongestWord(sen) {

    var replace_this = /[!@#$%^&~*/(),.":{}|<>]/g;
    // replace every special character with an empty space
    var rep = sen.replace(replace_this, "");

    // turn string into an array of words
    var arr = rep.split(" ");
    console.log(arr);
    var greatest_length = 0;
    var longest_word = '';

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > greatest_length) {
            greatest_length = arr[i].length;
            longest_word = arr[i];
        }
        //skips words that have the same length
        if (arr[i].length == greatest_length) {
            continue;
        }
    }


    return longest_word;

}

// keep this function call here 
console.log(LongestWord("fun&!! time"));