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
    let currentSubstring = ""

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
        
        if(!checkEntries(arrCounter, strCounter)){
            j++                         
            addToKey((str.charAt(j)), strCounter) //adds the key to the necessary key value pairs
        } else {
            currentSubstring = str.slice(i, (j+ 1)) 
            strCounter[str.charAt(i)] -= 1 //as we move the window from the beginning we subtract key values accordingly
            i++
        }
    }

    return currentSubstring    
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






/* array = ['x', 'y', 'z']  string = "xyyzyzyx"
    Array Freq           String 
    Counter              Traversing
    { x: 1,                        i   j
      y: 1,              x y y z y z y x
      z: 1
    }

*/