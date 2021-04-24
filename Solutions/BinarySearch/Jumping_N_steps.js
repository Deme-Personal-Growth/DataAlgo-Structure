/** 
 * You can jump either 1, 2, or 3 sets of stairs. 
 * How many different ways can you go up a set of n stairs
 */

const memo = {}

Solution = (n) => {
    if(n < 0) return 0

    if(n === 0) return 1

    if(memo[n]) return n

    return memo[n] = Solution(n - 1) + Solution(n - 2) + Solution(n - 3)
}

/** This can be solved using recursion along side memoization. We create a place to store
 * our answers in which I call memo. This will live outside of our function in order to 
 * allow our function to run much quicker
 * 
 */