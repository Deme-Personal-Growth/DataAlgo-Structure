//Questions to ask, do we care if the letter is uppercase or not?
//Are we also check punctuation?
//This is for actual 


isAnagram = (str1, str2) => {
    if(str1.length !== str2.length){
        return false
    } 

    const str1Obj = {}
   
    for(let char of str1){
        const lower = char.toLowerCase()

        str1Obj[lower] = (str1Obj[lower] || 0) + 1
    }

    console.log(str1Obj)

    for(let val in str2){
        const char = str2.charAt(val)

        if(!str1Obj[char]){
            return false
        } else {
            str1Obj[char] -= 1
        }
    }

    return true 
}

console.log(isAnagram("", ""))
console.log(isAnagram("Hello", "olHle"))
console.log(isAnagram("gogono", "ogogon"))
console.log(isAnagram("1", "2"))



// Solution from Udemy

function validAnagram(first, second) {
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return true;
  }
  
  // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
  validAnagram('anagrams', 'nagaramm')