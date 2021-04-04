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
    let i, j = 0
    let lowestPossibleCount = arr.length
    let currentCount = 0
    let shortestSubstring = ""

    arr.forEach(ele => {
        createObj(ele, arrCounter)
    })


    while(i < str.length - 1){
        if(str.charAt(i)){

        }
    }
    
    
}

/*
    { x: 1,
      y: 1,
      z: 1
    }  

    str
*/

function checkEntries(obj1, obj2){
        
}

function createObj(ele, Obj){
    Obj[ele] = ( Obj[ele] || 0 ) + 1
}

/**
 * 1. Alright so my first thoughts are I'm using a freq counter, 2 pointers/sliding window
 * 2. We need to make sure that every character in the array is used so we
 * can rely on arr.length to make sure we have all instances of items
 * 3. We can check the freq of characters in our sliding window
 */



getShortestUniqueSubstring(["a", "b", "c"], "accbaabaccba")
getShortestUniqueSubstring(["a", "b", "c", "d"], "accbaabaccba")
getShortestUniqueSubstring([ "c", "d", "b"], "bccbccccbbbdd")
getShortestUniqueSubstring([ "x", "y", "z"], "xyyzyzyx")

