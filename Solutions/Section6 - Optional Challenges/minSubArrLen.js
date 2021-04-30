/**
 * Writer a function called minSubArrLen which accepts two parameters - an array of positive
 * integers and a positive integer
 * 
 * @param {*} arr 
 * @param {*} n 
 * 
 * This function should return the minimal length of a cotinguous subarray of which the sum
 * is greater than or equal to the integer passed to the function. If there isn't one, return
 * 0
 */
function minSubArrLen(arr, n){
    let currentMax = arr[0]
    let j = 1

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < n){
            currentMax = arr[j]
            j++
        }
    }
}