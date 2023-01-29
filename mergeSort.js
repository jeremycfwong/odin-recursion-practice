function mergeSort(array){
    //base case
    if(array.length <= 1) return array
    
    //slicing array
    let mid = Math.floor(array.length / 2)
    let low = array.splice(0,mid)

    return merge(mergeSort(low),mergeSort(array))
}

function merge(left,right){
    let result = []
    while (left.length && right.length){
        if(left[0] < right[0]){
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }    
    }

    return [...result,...left,...right]
}

console.log(mergeSort([2,34,23123,525,6,7]))