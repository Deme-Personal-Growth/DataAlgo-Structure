/**
 * @param {string} s
 * @return {number}
 */
 const lengthOfLongestSubstring = (s) => {
    let maxLetters = 1
    let currentMax = 1
    let i = 0
    let ii = 1
    const freqLetters = {}
    freqLetters[s.charAt(i)] = 1
    
    if(s.length === 0) return 0
    
    while(ii <= s.length - 1){
        let firstLetter = s.charAt(i)
        let secondLetter = s.charAt(ii)
        
        if(firstLetter === secondLetter){
            i++
            ii++
        } else {
           
            if( freqLetters[secondLetter] === undefined || freqLetters[secondLetter] === 0) {
                freqLetters[secondLetter] = (freqLetters[secondLetter] || 0) + 1
                ii++
                currentMax++
            } else {
                freqLetters[firstLetter] -= 1
                i++
                currentMax -= 1
            }
            maxLetters = Math.max(currentMax, maxLetters) 
                 
        }
    }
    
    return maxLetters
    
};