//Questions to ask, do we care if the letter is uppercase or not?
//Are we also check punctuation?


isAnagram = (str1, str2) => {
    if(str1.length !== str2.length){
        return false
    } 

    const newStr1 = str1.split("").reverse()
    const newStr2 = str2.split("")

    console.log(newStr1, newStr2)

    for(let val in newStr1){
        if(newStr1[val] !== newStr2[val]){
            return false
        }
    }

    return true 
}

console.log(isAnagram("", ""))
console.log(isAnagram("Hello", "olleH"))
console.log(isAnagram("gogono", "ogogon"))
console.log(isAnagram("1", "2"))