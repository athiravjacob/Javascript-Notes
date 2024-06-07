//********************** Call  ****************************** */ 
//
// var obj ={
//     name:"Athira"
// }
// function greet(age,place){
//     console.log(`Hello ${this.name}, age ${age} from ${place}`)

// }
// greet.call(obj,27,"kochi")

/*****************************  Apply *******************************/

// var obj ={
//         name:"Athira"
//     }
//     function greet(age,place){
//         console.log(`Hello ${this.name}, age ${age} from ${place}`)
    
//     }
//     greet.apply(obj,[27,"kochi"])

/**************************************** Bind********************************/
// var obj ={
//     name:"Athira"
// }
// function greet(age,place){
//     console.log(`Hello ${this.name}, age ${age} from ${place}`)

// }
// const sayHello=greet.bind(obj)
// sayHello(20,"KOCHI")
// sayHello(27,"jbkj")

// **************************Question 1*****************************
// const age=10
// const person1={
//     age:30,
//     getAge:function(){
//         console.log(`${this.age}`); 
//     }
// }
// const person2={age:20}
// const person3={age:40}
// person1.getAge() //30
// person1.getAge.call(person2) //20
// person1.getAge.call(person3) //24

/*****************************Question 2**************************************/

//  const status="status Global"
// setTimeout(()=>{
//     const status="status Inside setTime Out"
//     const obj={
//         status:"status inside Object",
//         getStatus(){
//             return this.status
//         }
//     }
//     console.log(status) //status inside settimeout
//     console.log(obj.getStatus()) //status inside object
//     //In a setTimeout callback in non-strict modeor in browser, this refers to the global object (or undefined in strict mode).
//     //Node.js by default use strict mode in browser below code would have given status global as output
//     console.log(obj.getStatus.call(global))// undefined
// },0)
 

// **********************************Question 3***********************************
const animals=[
    {species:"Lion",name:"King"},
    {species:"Whale",name:"Queen"}
]

/* When you define print as a regular function within PrintAnimal
 and then call it, the this context inside print does not automatically 
 refer to the current object (animals[i])*/

// function PrintAnimal(i){
//     this.print=function(){
//         console.log(`#${i} ${this.species} ${this.name}`)
//     }
//    this.print()
// }

// for(let i=0;i<animals.length;i++){
//     PrintAnimal.call(animals[i],i)
// }

//Arrow functions do not have their own this context. They inherit this from the surrounding lexical context.
// function PrintAnimal() {
//     const print = () => {
//         console.log(`${this.species} ${this.name}`);
//     }
//     print();
// }

// for (let i = 0; i < animals.length; i++) {
//     PrintAnimal.call(animals[i]);
// }


//*******************************************************Concat array using apply

// const arr1=[7,8,9]
// const arr2=[1,2,3]
// arr1.push.apply(arr1,arr2)
// console.log(arr1)

//***********************************************************Largest number from array using apply

// const array=[17,25,93,4,5]
// console.log(Math.max.apply([],array))


/************************************ Question Bind****************************************/
// function f(){
//     console.log(this);
// }
// let user ={
//     g:f.bind(null)
// }
// user.g()

// ************************************************************************
const age=10
const person={
    name:"Athira",
    age:12,
    fnAge:function(){
        console.log(` age:${this.age}`)
    },
    ageArrow:()=>console.log(`Arrow age ${this.age}`)
}
const person1 ={age:22}
person.ageArrow.call(person1)
person.fnAge.call(person1)