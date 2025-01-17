const arr = [12, 3, [4, 5], [5, 5, [7]]]
// console.log(arr.flat(Infinity))

function flatA(arr) {
    let result = []
    for (let num of arr) {
        if (Array.isArray(num)) {
            result = result.concat(flatA(num))
        }else result.push(num)
    }
   return result
}
console.log(flatA(arr))