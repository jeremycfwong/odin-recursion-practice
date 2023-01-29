function fib(n){
    // edge case
    if (n == 1){
        return [0]
    }

    // base case
    const result = [0,1]
    
    // appending
    for (let i = 2; i < n; i++){
        result.push(result[i - 1] + result[i - 2])
    }

    return result
}

