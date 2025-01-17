const arr = [1, 3, 1, 2, 3, 4, 5]
let duplicates = []
let fequency = new Map()
for (let num of arr) {
    fequency.set(num,(fequency.get(num) || 0)+1)
}
console.log(fequency)

for (let [key, value] of fequency) {
    if(value >1) duplicates.push(key)
}
console.log(duplicates)