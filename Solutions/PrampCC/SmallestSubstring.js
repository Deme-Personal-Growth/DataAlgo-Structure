/**
 * Given an array of unique characters arr and a string str, 
 * Implement a function getShortestUniqueSubstring that finds
 * the smallest substring of str containing in arr. Return ""(empty string)
 * if such a substring doesn't exist.
 * 
 * Come up with an asymptotically optimal solution and analyze the time 
 * and space complexities
 */

function getShortestUniqueSubstring(arr, str){
    const arrCounter = {}
    const strCounter = {}
    let i = 0
    let j = 1
    let lowestSubstring = arr.join()

    //Turn every element of the array into a freqCounter key and value pairs
    arr.forEach(ele => {
        addToKey(ele, arrCounter)
    })

    //Since no matter what we are starting on the first 2 elements of the array,
    //We just make the immediately to keys and values
    addToKey((str.charAt(i)), strCounter)
    addToKey((str.charAt(j)), strCounter)
    

    //Loop through the whole string's letters to check and create a window of the string we're working with
    while(j <= str.length ){
        let currentSubstring = ""
        
        if(!checkEntries(arrCounter, strCounter)){
            j++                         
            addToKey((str.charAt(j)), strCounter) //adds the key to the necessary key value pairs
        } else {
            currentSubstring = str.slice(i, (j+ 1))
            strCounter[str.charAt(i)] -= 1 //as we move the window from the beginning we subtract key values accordingly
            if(Math.min(currentSubstring.length, lowestSubstring.length) === currentSubstring){
                lowestSubstring = currentSubstring
            }
            i++
        }


    }

    return lowestSubstring  
}

//helper function to check if the String Freq Counter's keys are corrsponding and are greater than those in the Array Freq Counter
function checkEntries(obj1, obj2){
    for( let key in obj1){
        if(!(obj2[key] >= obj1[key])){
            return false
        }
    }
    return true
}

//helper function to add to the key so I don't write this too many times
function addToKey(ele, Obj){
    Obj[ele] = ( Obj[ele] || 0 ) + 1
}


/**
 * 1. Alright so my first thoughts are I'm using a freq counter, 2 pointers/sliding window
 * 2. We need to make sure that every character in the array is used so we
 * can rely on arr.length to make sure we have all instances of items
 * 3. We can check the freq of characters in our sliding window
 */



console.log(getShortestUniqueSubstring(["a", "b", "c"], "accbaabaccba"))
console.log(getShortestUniqueSubstring(["a", "b", "c", "d"], "accbaabaccba"))
console.log(getShortestUniqueSubstring([ "c", "d", "b"], "bccbccccbbbdd"))
console.log(getShortestUniqueSubstring([ "x", "y", "z"], "xyyzyzyx"))

function minWindow(str, targets) {
    let counts = {};
    let missing = targets.length;
    let range = [0,Infinity];
    
    for (let i = 0; i < targets.length; i++) {
      counts[targets[i]] = 0
    }
    
    let left = 0;
    for (let right = 0; right < str.length; right++) {
      if (str[right] in counts) {
        counts[str[right]]++;
        if(counts[str[right]] === 1) {
          missing--;
        }
      } 
      
      while (missing === 0) {
        
        if((right - left) < (range[1] - range[0])) {
          range = [left, right]
        }
        range = [left, right]
        
        if(str[left] in counts) {
          counts[str[left]]--;
          if (counts[str[left]] === 0) {
            missing++
          }
        }
        left++;
      }
  
    }
    
    console.log("COUNTS", counts);
    console.log("MISSING", missing);
    console.log("RANGE", range);
    
    if(range[1] === Infinity) {
      return "";
    } else {
      return str.slice(range[0], range[1] + 1);
    }
  
  }




/* array = ['x', 'y', 'z']  string = "xyyzyzyx"
    Array Freq           String 
    Counter              Traversing
    { x: 1,                        i   j
      y: 1,              x y y z y z y x
      z: 1
    }

*/