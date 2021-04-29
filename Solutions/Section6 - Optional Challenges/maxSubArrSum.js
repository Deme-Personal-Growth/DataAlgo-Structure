function maxSubarraySum(arr, n){
    // add whatever parameters you deem necessary - good luck!
    
    let maxSum = Number.NEGATIVE_INFINITY
    let currentSum
    let i = 0
    let ii = 1
    
    while (ii <= arr.length - 1 ){
        
        
        if( (ii - i ) === (n - 1) ){
           currentSum = arr[i] + arr[ii]
           console.log(maxSum, currentSum)
           maxSum = Math.max(maxSum, currentSum)
           i++
           ii = i + 1
        } else {
        
          if( (ii - i) > (n - 1) ){
              i++
          }
          if( (ii - i) < (n - 1) ){
              ii++
          }
        }
    }
    
    if(maxSum === Number.NEGATIVE_INFINITY) return null
    
    return maxSum
   
  }