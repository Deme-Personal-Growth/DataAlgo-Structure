/** Given a lowercase alphabet string s, determine whether
 * it has all unique characters
 */

class Solution {
    solve(s) {
        let letterFreq = {}
        
        s.split("").forEach(letter => {
            letterFreq[letter] = (letterFreq[letter] || 0 ) + 1
        })

        for(let key in letterFreq){
            if(letterFreq[key] > 1){
                return false
            }
        }

        return true
    }
}