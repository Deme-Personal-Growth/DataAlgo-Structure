
countUniqueValues = (arr) => {
    let uniqueNumbers = 1
    let i = 0

    if(arr.length === 0){
        uniqueNumbers = 0
    }

    for(let ii = 1; ii < arr.length; ii++){
       if(arr[i] !== arr[ii]){
           uniqueNumbers += 1
           i = ii    
       }
    }
    return `The number of Unique Numbers in the array is ${uniqueNumbers}`
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]))
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))
console.log(countUniqueValues([]))
console.log(countUniqueValues([-2, -1, -1, 0, 1]))