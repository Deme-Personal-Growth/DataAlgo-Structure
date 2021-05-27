const isPalindrome = (s) => {
   
    const regex = /[a-zA-Z0-9]/
    const opposite = s.split("").filter(value => value.match(regex)).reverse()
    const phrase = s.split("").filter(value => value.match(regex))
    

    for(let i = 0; i < opposite.length - 1; i++){
        if(opposite[i].toLowerCase() !== phrase[i].toLowerCase()){
            return false
        }
    }

    return true

};