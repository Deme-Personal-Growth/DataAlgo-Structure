/** You are given a string s contianing digits from
 * "0" to "9" and lowercase alphabet characters. Return 
 * the sum of the numbers found in s
 */

 class Solution {
    solve(s) {
       const justNums = s.split(/[^0-9]/)

       return justNums.reduce((sum, value) => {
           if(value !== ''){
                return sum += parseInt(value)
            } else {
                return sum
            } 
       }, 0)

    }
}

/**     Try doing this problem with ASCII next time */