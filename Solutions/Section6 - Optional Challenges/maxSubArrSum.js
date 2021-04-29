function maxSubarraySum(arr, n){
    // add whatever parameters you deem necessary - good luck!
    
    let maxSum = Number.NEGATIVE_INFINITY
    let i = 0
    let ii = 1
    let currentSum = arr[i] + arr[ii]
    const limit = n - 1
    
    while (ii <= arr.length - 1 ){
        
        if( (ii - i ) === limit ){
          maxSum = Math.max(maxSum, currentSum)
          i++
          ii = i + 1
          currentSum = arr[i] + arr[ii]
       }
          if( (ii - i) < limit ){
              ii++
              currentSum += arr[ii]
          }

          if( (ii - i) > limit){
              currentSum -= arr[i]
              i++
          }

    }
    
    if(maxSum === Number.NEGATIVE_INFINITY) return null
    
    return maxSum
   
  }

  console.log(maxSubarraySum([1, 4, 2 ,10, 23, 3, 1, 0, 20], 4))