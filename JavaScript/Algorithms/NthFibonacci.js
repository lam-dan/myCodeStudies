// Finoacci Sequence is a famous sequence in which the next number is always the result of the preceding 2 numbers combined.
// This sequence is commonly seen in nature with how apples and flowers grow.
// [0,1,1,2,3,5,8,13,21,34]

// Solution #1
// O(n) Space Complexity
// O(2^n)
function fib(n){
    if(n === 2){
        return 1
    }
    if(n === 1){
        return 0
    }
    return fib(n-1)+fib(n-2);
}

console.log(fib(6));

// Solution #2 
// Space Complexity: O(n)
// Time Complexity: O(n)
function fibMemoize(n,memoize={1:0,2:1}){
    if(n in memoize){
        return memoize[n];
    }
    memoize[n] = fibMemoize(n-1,memoize) + fib(n-2,memoize)
    return memoize[n];
}

console.log(fibMemoize(6));

// Solution #3
// Space Coplexity:
// Time Complexity:
function fibNext(n){
    const lastTwo = [0,1];
    let counter = 3;
    while(counter <= n){
        const nextFib = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = nextFib;
        counter++
    }
	return n>1 ? lastTwo[1] : lastTwo[0];
}

console.log(fibNext(3));
// [0,1] => [1,1] => [1,2] => [2,3]=> [3,5]
// counter => 3=> 4 =>5=>6=>7
