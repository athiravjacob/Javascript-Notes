
/*******************T*his is an example of shallow copy
//******************** here value of obj2 is changed but it also changed the values of object obj1
// const obj1 ={
//     greet :"hello"
// }
// const obj2 = obj1
// console.log(`obj1: ${obj1.greet}`)
// console.log(`obj2: ${obj2.greet}`)

// obj2.greet ="Hey"

// console.log(`obj1: ${obj1.greet}`)
// console.log(`obj2: ${obj2.greet}`)

//************To avoid this use canuse spread*********/
// const obj1 ={
//     greet :"hello"
// }
// const obj2 = {...obj1}
// console.log(`obj1: ${obj1.greet}`)
// console.log(`obj2: ${obj2.greet}`)

// obj2.greet ="Hey"

// console.log(`obj1: ${obj1.greet}`)
//console.log(`obj2: ${obj2.greet}`)

/**********************************Also use object.assign 
 * 
 * You have to be careful though, as the first argument in the Object.assign() 
 * method actually gets modified and returned. So make sure that you pass the
 *  object to copy at least as the second argument. 
 * Normally, you would just pass an empty object as the
 *  first argument to prevent modifying any existing data.
*/
// const obj1 ={
//     greet :"hello"
// }
// const obj2 =Object.assign({},obj1)
// console.log(`obj1: ${obj1.greet}`)
// console.log(`obj2: ${obj2.greet}`)

// obj2.greet ="Hey"

// console.log(`obj1: ${obj1.greet}`)
// console.log(`obj2: ${obj2.greet}`)

/// &&&&&&&&&&&&&&  But deep coping nested object with this technique is not possible
//  const obj1 ={
//     food:{
//         fav:"icecream"
//     }
//  }

//  const obj2 ={...obj1}
// console.log(`obj1: ${obj1.food.fav}`)
// console.log(`obj2: ${obj2.food.fav}`)

// obj2.food.fav ="Apple"

// console.log(`obj1: ${obj1.food.fav}`)
// console.log(`obj2: ${obj2.food.fav}`)

// use stringify and parse instead

const obj1 ={
    food:{
        fav:"icecream"
    }
 }

 const obj2 =JSON.parse(JSON.stringify(obj1))
console.log(`obj1: ${obj1.food.fav}`)
console.log(`obj2: ${obj2.food.fav}`)

obj2.food.fav ="Apple"

console.log(`obj1: ${obj1.food.fav}`)
console.log(`obj2: ${obj2.food.fav}`)