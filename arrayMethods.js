//Push- add elements 
// let array = [];
// array.push(1,2,3,4)
// console.log(array)

//unshift -add elements to the begining of an array
// array.unshift(0)
// console.log(array)

// splice array.splice(start,deletecount,itemtoadd,itemtoadd...)
// let newArray=array.splice(3,2,5,6,7)
// console.log(array)
// console.log(newArray)

// let elem1 = newArray.splice(0,1)[0]

// newArray.splice(1,0,elem1)
// console.log(newArray)

//pop delete last element
// let delElem=newArray.pop()
// console.log(newArray)
// console.log(delElem)


//shift remove first elem

// array.shift()
// console.log(array)
// console.log(deleElem)

//slice
// let n =[10,20,30,40,50]
// let m= n.splice(1,3)
// m.push(20)
// console.log("original array"+n)
// console.log(m)

let arr =[{a:1,b:2},{x:3,y:4},{a:5,b:7}]
let newAr =arr.splice(0,2)
console.log( arr)
console.log(newAr)
newAr[0].a=10
console.log( arr)
console.log(newAr)

const arrc=[1,2,3,4,5,6,7,8,10]
for(let i=0;i<arr.length;i++){
    if(!arr.includes(i+1)){
        console.log(i+1)
    }

}
