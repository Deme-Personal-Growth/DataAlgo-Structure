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
    let z = 0
    let i = 0
    let j = 1
    let currentCount = 0

    arr.forEach(ele => {
        addToKey(ele, arrCounter)
    })

    addToKey((str.charAt(i)), strCounter)
    addToKey((str.charAt(j)), strCounter)
    
    while(z < str.length - 1){
        console.log(arrCounter, strCounter)

        if(!checkEntries(arrCounter, strCounter)){
            j++
            addToKey((str.charAt(j)), strCounter)
        } else {
            strCounter[str.charAt(i)] -= 1 
            i++
            currentCount = ((j - i) + 1)
        }
        console.log(arrCounter, strCounter)
        z++
    }
    
    
    
}

/*
    { x: 1,
      y: 1,
      z: 1
    }  

    { x: 1,
      y: 2,
      z: 1,
        
    }
*/

function checkEntries(obj1, obj2){
    for( let key in obj1){
        if(!(obj2[key] >= obj1[key])){
            return false
        }
    }
    return true
}

function addToKey(ele, Obj){
    Obj[ele] = ( Obj[ele] || 0 ) + 1
}


/**
 * 1. Alright so my first thoughts are I'm using a freq counter, 2 pointers/sliding window
 * 2. We need to make sure that every character in the array is used so we
 * can rely on arr.length to make sure we have all instances of items
 * 3. We can check the freq of characters in our sliding window
 */



// getShortestUniqueSubstring(["a", "b", "c"], "accbaabaccba")
// getShortestUniqueSubstring(["a", "b", "c", "d"], "accbaabaccba")
// getShortestUniqueSubstring([ "c", "d", "b"], "bccbccccbbbdd")
getShortestUniqueSubstring([ "x", "y", "z"], "xyyzyzyx")

