sameFrequency = (int1, int2) => {
    const int1Obj = {}
    const int2Obj = {}

    const int1String = int1.toString()
    const int2String = int2.toString()

    if(int1String.length !== int2String.length) return false

    for(let digit of int1String){
        int1Obj[digit] = (int1Obj[digit] || 0) + 1
    }

    for(let digit of int2String){
        int2Obj[digit] = (int2Obj[digit] || 0) + 1
    }

    console.log(int1Obj, int2Obj)

    for(let key in int1Obj){
        if(!(key in int2Obj) || int2Obj[key] !== int1Obj[key]){
            return false
        } else {
            return true
        } 
    }

}

console.log(sameFrequency(182, 281))
console.log(sameFrequency(34, 14))
console.log(sameFrequency(3589578, 5879385))
console.log(sameFrequency(22, 222))