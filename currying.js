
// Function with multiple arguments are transformed into a series of function which takes single argument

// function addCurry(a){
//     return function Total(b){
//         return a+b
//     }
// }

// const sum=addCurry(2)
// console.log(sum(3))

// Without currying

// function applyDiscount(price,discount){
//     return price-(price*discount)
// }

// console.log(applyDiscount(100,0.1))
// console.log(applyDiscount(100,0.2))

// With Currying

function calculateDiscount(discount){
    return function applyFunction(price){
        return price-(price*discount)
    }
}

const tenPerDiscount =calculateDiscount(0.1)
const twentyPerDiscount =calculateDiscount(0.2)
console.log(tenPerDiscount(100))