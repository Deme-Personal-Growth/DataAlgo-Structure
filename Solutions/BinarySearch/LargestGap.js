/** Given a list of integers nums, return the largest difference 
 * of two consecutive integers in the sorted version of nums
 */

class Solution {
    solve(nums) {

        let count = 0

        let sortedNums = nums.sort(function(a, b) {
            return a - b;
            })  

        for( let i = 0; i <sortedNums.length - 1; i++){
            if(sortedNums[i + 1] - sortedNums[i] > count){
                count = sortedNums[i + 1] - sortedNums[i]
            }
        }
        return count
    }
}