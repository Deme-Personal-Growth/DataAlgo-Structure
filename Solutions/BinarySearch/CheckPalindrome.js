/** Give a string s, return whether it is a palindrome */
class Solution {
    solve(s) {
        let oppsite = s.split("")
        let newWord= oppsite.reverse().join("")
        
        if(s === newWord){
            return true
        }

        return false
    }
}