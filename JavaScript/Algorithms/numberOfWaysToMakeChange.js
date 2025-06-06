// Given an array of positive intergers representing coin denomination and single non-negative
// integer representing a target amount of money, implement a function that returns they numbers of
// ways to make change for that target amount using the given coin denominations. Note that an
// unlimited amount of is coins is at your dispoal.
// Input: 6, [1,5]
// Output: 2 (1x1 + 1x5 and 6x1)

function numberOfWaysToMakeChange(n, denoms) {
  // Create an an array ways = [0,0,0,0,0,0,0]
  const ways = new Array(n + 1).fill(0);
  // Create base case for ways to make change for 0
  ways[0] = 1;
  // for each denomination in the denoms array
  for (let denom of denoms) {
    // we are going to compare against the ways array and check
    for (let amount = 1; amount < n + 1; amount++) {
      // only if the current denominator is less than or equal to the amount
      if (denom <= amount) {
        // that's when we calculate okay for each ways
        ways[amount] = ways[amount] + ways[amount - denom];
      }
    }
  }
  return ways[n];
}

console.log(numberOfWaysToMakeChange(6,[1,5]))