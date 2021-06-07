// 4- Count Total number of zeros from 1 upto n
// 	countZero(2014) = 223
// 	countZero(100) = 11

const totalZeros = (n) => {
    let count = 0
    const objN = {}
    
    if (n === 1) return 0
    if (objN[n]) return objN[n]
    
    if(n % 10 === 0){
        count++
        objN[n] = count
        totalZeros(n / 10)
    }

    if(n % 10 !== 0 ){
        objN[n] = count
        totalZeros(n - 1)
    }

}

console.log(totalZeros(2014))