solve = (a) => {
    let b = 1
    let product = 1

    while(b <= a) {
        if(product < a){
            b += 1
            product = product * b
        } else if (product > a){
            return -1
        } else if(product === a){
            return b
        }
    }
}

console.log("Solve 6", solve(6))
console.log("Solve 10", solve(10))
console.log("Solve 120", solve(120))
console.log("Solve 2", solve(2))


    

