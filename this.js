// console.log(this)
// //This inside a function refers to the global object 
// function showThis() {
//     console.log(this);
// }

// showThis();

//When a method is called as a property of an object, this refers to the object itself.
// const obje={
//     name :"Athi",
//     fun:function(){
//         console.log(this.name)
//     }
// }
// obje.fun()

// Arrow Function

// const arrowFun =()=>{
//     console.log(this)
// }
// arrowFun()

const obj = {
    name: 'Eve',
    showThis: () => {
        console.log(this.name);
    }
};

obj.showThis();

// function newFun(){
//     let name="kyle"
//     const arrfun=()=>{
//         console.log(this)
//     }
//     arrfun()
// }

// newFun()

// this used inside normal function and arrow function points to global object
const arrowFun =()=>console.log(this)
arrowFun() //{}
function normalFunc(){
    console.log(this);
}
normalFunc()// globalobject
//this when used inside method :normal function inside object ,
//this points to the object itself but arrow function inside object ,this points to the global object
// const obj={
//     name:"Anna",
//     normalFunc:function(){
//         console.log(this.name)
//     },
//     arrowFun:()=>console.log(this.name)
// }
// obj.normalFunc() //Anna
// obj.arrowFun() //undefined
