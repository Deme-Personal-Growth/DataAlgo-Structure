/** 
 Given a list of integers nums, 
 return whether the list is strictly increasing or strictly decreasing.
 * 
 * */


 class Solution {
    solve(nums) {
        let i = 0
        if(nums.length === 1)return true

        if(nums[i] <= nums[i + 1]){
            return this.checkIncDec(nums, '>')
        } else if (nums[i] >= nums[i + 1]){
            return this.checkIncDec(nums, '<')
        }
    }

    checkIncDec = (array, comparison) => {
        
        for(let i = 0; i < array.length - 1; i++){

            let num = array[i]
            let secondNum = array[i + 1]

           console.log(num, secondNum, comparison)

            switch(comparison){
                case ">":
                    if(num  >= secondNum)return false
                    break
                case "<":
                    if(num <= secondNum)return false
                    break
                default:
                    break
            }

        }
        return true
    }
}