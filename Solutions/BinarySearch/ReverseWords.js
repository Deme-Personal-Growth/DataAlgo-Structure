/** Given a string s of words delimited by spaces,
 * reverse the order of the words
 */

class Solution {
    solve(sentence) {
       return sentence.split(" ").reverse().join(" ")
    }
}