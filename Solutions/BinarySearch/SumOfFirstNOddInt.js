/** Given an integer n, return the sum of the first n positive odd integers */

class Solution {
    solve(n) {
        let oddArray = []
        let i = 0
        const reducer = (accumulator, currentValue) => accumulator + currentValue
        
        while(oddArray.length < n){
            if(i % 2 === 1){
                oddArray.push(i)
                i++
            } else {
                i++
            }
        }

       return oddArray.reduce(reducer, 0) 
        
    }
}