// Given an array of integers, the task is to replace every element 
// with the smallest element on its left side. 

class Solution {
    solve(nums) {
         let min = nums[0] //this is our left most element which we will later convert to 0
         let possMin // to store our lowest possible left number

         for (let i = 1; i < nums.length; i++) { 
             possMin = nums[i] //since our element @ 1 is our lowest possible at first we set it
             nums[i] = min 
             if (possMin < min) min = possMin //since we just need to check if possible min is less than min to set our possible min at any point
         }
         nums[0] = 0
         return nums
     }
 }