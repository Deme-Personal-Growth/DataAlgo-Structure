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
     * 1. first if array is empty then null, undefinied, or false
     * 
     * 2. Finding out the pair number is to the number you insert
     * let num = arr[0]
     * let complimentary_number = (avg * 2) - a
     * 
     * 3. Now we need to find out the max# in the array so:
     * let max_num = arr[-1]
     * 
     * 4. We need a middle# to start checking eventually
     * let middle = Math.floor((arr.length / 2)) 
     * let current = arr[middle]
     * 
     * Now we can compare using a divide and conquer pattern
     * 
     * 5. if complimentary_number > max_num then there isn't an answer in the array
     * 
     * 6. if complimentary_number > current then
     *          middle -= 1
     *          current[middle]
     * 
     * 7. if complimentary_number < current then
     *          middle += 1
     *          current[middle]
     */