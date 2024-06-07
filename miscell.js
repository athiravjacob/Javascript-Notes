/************************************************** Set ******************************************** */


// let arr=[1,2,3,1,2,3,4,5,2,5,6,3]
// let set =new Set(arr)

// console.log(set)
// set.add(9)
// console.log(set.has(5))
// set.forEach(x=>console.log(x))
// for(let i of set){
//     // console.log(i)
// }

// console.log(3||4) //3
// console.log(''||4)//4
// console.log(3>2>1)//false

let arr1=[1,3]
let arr2=[2]
let concat=[...arr1,...arr2]
console.log(concat);
let sortArr =concat.sort(function(a,b){return a-b})


