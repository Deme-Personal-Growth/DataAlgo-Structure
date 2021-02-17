areThereDuplicates = () => {
    //O(n) space complexity + O(n) time complexity
    const freqObj = {}

    for (let i = 0; i < arguments.length; i++){
        
        if(!freqObj[arguments[i]]){
            freqObj[arguments[i]] = 1
        } else if ( freqObj[arguments[i]] === 1){
            return true
        } 
    }

    return false
}

/** Refactored
 * 
 * areThereDuplicates = () => {
 *     return new Set(arguments).size !== arguments.length
 * }
 * 
 */