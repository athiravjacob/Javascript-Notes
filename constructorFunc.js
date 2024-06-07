function person(name){
    this.name =name,
    this.greet= ()=>{
        console.log(`Hello ${this.name}`)
    }
}

let person1 = new person('JOY')
person1.greet()

/* 
    A constructor function in JavaScript is a special type of function
     that is used to create and initialize objects. 
     It acts as a blueprint for creating multiple objects of the same type. 
     The new keyword is used with a constructor function to create a new object instance



    If you forget to use the new keyword, the constructor function will not create a new object.
    Instead, it will behave like a regular function, and this inside the function will refer to the global object
    (or undefined in strict mode). This can lead to unexpected behavior.


    Inside a constructor function, the this keyword refers to the new object being created.
     It allows you to set properties and methods on that object.



*/
