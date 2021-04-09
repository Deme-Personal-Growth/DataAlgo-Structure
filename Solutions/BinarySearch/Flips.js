// You are given an integer list nums containing 0s and 1s. 
// Consider an operation where we pick an index i in nums and flip i as 
// well as all numbers to the right of i. 
// Return the minimum number of operations required to make nums contain all 0s.

// Constraints

// n ≤ 100,000 where n is the length of nums.

class Solution {
    solve(nums) {
        let neededFlips = 0
        let flipSignal = 1
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == flipSignal) {
                neededFlips++
                if (flipSignal == 1) {
                    flipSignal = 0
                } else {
                    flipSignal = 1
                }
            }
        }
        return neededFlips
    }
}