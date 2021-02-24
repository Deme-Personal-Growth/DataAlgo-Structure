function isSubsequence(string1, string2) {
    let testLetter = 0
    let lastLetter = string2.length - 1
    let valOfStr1 = 0
    let checkArray = []
    
    while(testLetter <= lastLetter){

        if(string2.charAt(testLetter) !== string1.charAt(valOfStr1)){
            testLetter += 1
        } else {
            checkArray.push('true')
            valOfStr1 += 1
            testLetter += 1
        }

    }
    
    if(checkArray.length === string1.length){
        return true
    } else {
        return false
    }

    // good luck. Add any arguments you deem necessary.
  }

  /**
   * first I need a few variables, 
   * testLetter will be what Letter I'm checking in string2
   * lastLetter will allow me to make sure I don't keep checking til the end
   * valOfStr1, will let me use the same formula for every letter in string1
   * the array allows me to do a final check if all of letters checked were correct
   */


 
  console.log(isSubsequence(`hello`, `hello world`))
  console.log(isSubsequence(`sing`, `sting`))
  console.log(isSubsequence(`abc`, `abracadabra`))
  console.log(isSubsequence(`abc`, `acb`))