function averagePair(arr, avg){
    let min = 0
    let max = arr.length - 1

    while(min < max){
        let test_avg = ( (parseFloat(arr[min] + arr[max] ) / 2 ))
        
        if( test_avg < avg ){
            min += 1
        } else if(test_avg > avg){
            max -=1
        } else if(test_avg === avg) {
            return true
        }
    }
    return false
  }



  console.log(averagePair([1,2,3], 2.5))
  console.log(averagePair([1,3,3,5,6,7,10,12,19], 8))
  console.log(averagePair([-1, 0, 3, 4, 5,6], 4.1))
  console.log(averagePair([], 4))

  // add whatever parameters you deem necessary - good luck!
    /**
     * the arguments are an array and the avg which we will check against
     * 
     * 1. we need a pointer for the element at the beginning of the array
          and one for the end

       2. Then so long a min is less then max we can build an if statement that checks:
            a. if test_avg is less than avg : test the next element to the right of min
            b. if test_avg is greater than avg : test the next element to the left of max
            c. if test is equal to avg then we return false
       3. If the none of the above was true it will exit and we will return false
     */