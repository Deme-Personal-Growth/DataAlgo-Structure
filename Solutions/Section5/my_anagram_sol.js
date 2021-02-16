//Questions to ask, do we care if the letter is uppercase or not?
//Are we also check punctuation?
//This is for actual 


isAnagram = (str1, str2) => {
    if(str1.length !== str2.length){
        return false
    } 

    const str1Obj = {}
    const str2Obj = {}

    for(let char of str1){
        str1Obj[char] = (str1Obj[char] || 0) + 1
    }

    for(let char of str2){
        str2Obj[char] = (str2Obj[char] || 0) + 1
    }

    console.log(str1Obj, str2Obj)

    for(let key in str1Obj){
        if(!(key in str2Obj)){
            return false
        } else if(str2Obj[key] !== str1Obj[key]) {
            return false
        }
    }

    return true 
}

console.log(isAnagram("", ""))
console.log(isAnagram("Hello", "olHle"))
console.log(isAnagram("gogono", "ogogon"))
console.log(isAnagram("1", "2"))