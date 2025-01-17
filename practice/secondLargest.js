const arr = [1, 12, 3, 4]
// const set = [...new Set(arr)]
// const asc = arr.sort((a, b) =>  b-a)
// console.log("Second largest :",asc[1])

let largest = 0
let sec = 0
for (let num of arr){
    if (largest < num) {
        sec = largest
        largest = num
    } else if (num > sec && num !== largest) {
        sec=num
    }
}
console.log(sec)