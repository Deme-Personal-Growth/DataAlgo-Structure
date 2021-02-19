power = (num, exp) => {
    if(exp === 0) return 1

    return num * power(num, (exp - 1 ))
}

console.log(power(2, 0))
console.log(power(2, 2))
console.log(power(2, 4))