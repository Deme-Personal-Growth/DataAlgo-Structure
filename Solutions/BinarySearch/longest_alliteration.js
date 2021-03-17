/**
 * Given a list of lowercase alphabet strings [words],
 * return the array of the longest amount of
 * alliterations
 * 
 */

class LongestAlliterationArray {

        solve(words) {
            const lettersObj = {}
            let max = -1
            let maxArray
    
            words.forEach(word => {
                if (lettersObj[`${word.charAt(0)}`] === undefined){
                    let key = word.charAt(0)
                    key = {"value": 1, "array": []}
                    key["array"].push(word)
                    lettersObj[`${word.charAt(0)}`] = key
                } else {
                    lettersObj[`${word.charAt(0)}`]["value"] += 1
                    lettersObj[`${word.charAt(0)}`]["array"].push(word)
                }
            })
            
           for(let key in lettersObj){
                let checkValue = lettersObj[key]["value"]
               if(this.checkMax(checkValue, max)){
                   max = checkValue
                   maxArray = lettersObj[key]["array"]
               }
           }
            
            return maxArray
        }
    
        checkMax(a,b){
               if(Math.max(a,b) === a){
                   return true
               } else {
                   return false
               }
           }
             
        
    }