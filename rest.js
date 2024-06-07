/*
    The rest operator, represented by three dots
     represent an indefinite number of arguments as an array
     It is used in function parameters to handle a variable number of arguments. 
     It can also be used in array and object destructuring to collect the remaining elements.
*/

function fnrest(...rest){
    console.log(`${rest}`)
}
console.log(1,2,3)
console.log(1,2,3,2,3,5,5)

const arr =[10,20,30,40]
const [first,second,...rest]=arr
console.log(first)
console.log(rest)


const {fname,lname,...details}={
    fname:"athira",
    lname:"jacob",
    age :27,
    place:"kochi"
}
console.log(details)