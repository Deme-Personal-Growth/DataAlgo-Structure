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