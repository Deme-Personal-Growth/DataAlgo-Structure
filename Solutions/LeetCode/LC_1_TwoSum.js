const twoSum = (nums, target) => {
    
    let i = 0
    let j = 1
    let newNums = []
    
    
    while (i < nums.length - 1) {
        let current = target - nums[i]
        
        if(j <= nums.length - 1 && nums[j] !== current){
            j += 1
        } else if (nums[j] === current){
            newNums.push(i)
            newNums.push(j)
        } else {
            i += 1
            j = i + 1
        }
    }
    
    return newNums
    
};