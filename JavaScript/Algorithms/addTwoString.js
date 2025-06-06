function addStrings(string1, string2) {
    // Write your code here
    let leftSum1 = "";
    let leftSum2 = "";
    let rightSum1 = "";
    let rightSum2 = "";
    let periodIdx1 = string1.indexOf(".");
    let periodIdx2 = string2.indexOf(".");
    let total = 0;

    for ( var i = 0; i < periodIdx1; i++){
      leftSum1 += string1[i];
    }
    
    for ( var i = 0; i < periodIdx2; i++){
      leftSum2 += string2[i];
    }
    
    let totalLeftSum = Number(leftSum1) + Number(leftSum2);
    
    for ( var i = periodIdx1 + 1; i < string1.length; i++){
      rightSum1 += string1[i];
    }
    
    for ( var i = periodIdx2 + 1; i < string2.length; i++){
      rightSum2 += string2[i];
    }
        
    let totalRightSum = Number(rightSum1)/Number('1'+'0'.repeat(rightSum1.length)) + 
    Number(rightSum2)/Number('1'+'0'.repeat(rightSum2.length));
    total = totalRightSum + totalLeftSum;    
    return total.toString();
}

console.log(addStrings('11333333333.60000000000000005','13333333111.933333444444333333'));

// var getSum = function(a, b) {
//     if (b == 0) {
//         return a;
//     } else {
//         return getSum(a ^ b, (a & b) << 1)
//     }
// };

// console.log(getSum('1311.14','0.9'));

//After thinking about this problem more, I have come to a better answer that utilizes the Number method rather than the parseFloat method because of the rounding issues with large decimals. What I did was look for the index of the period in the string and basically added the left and right hand sides of the string using the Number method. For the right hand side, I took the length of the string on the right hand side of the period and to figure out how many zeros to add to 1, so that I can divide by the tenths, hundredths, or thousandths and add together.  Finally, I added both numbers together and return it as a string.  Time complexity is O(n) since we only use for loops for each operation, while space complexity 0(1) since our variables we declared and updated within the for loop operation and we are not creating new variables in the for loops.