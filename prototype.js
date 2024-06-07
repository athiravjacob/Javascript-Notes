function person(name){
    this.name =name
    this.greet =function(){
        console.log(`Hello ${name} ,age ${this.age}`)
    }
}

person.prototype.age =25
person.prototype.skill =function (){
    console.log(`${this.name} can draw`)
}
const firstperson=new person("athira")
const secondperson=new person("Maya")

firstperson.greet()
firstperson.skill()

secondperson.greet()
secondperson.skill()


/*While you can define methods inside the constructor
 function, defining them on the prototype is generally 
 more efficient and aligns with the prototypal inheritance 
 model in JavaScript. By using the prototype, you ensure that 
 all instances of the constructor function share the same
  method, saving memory and potentially improving performance*/


  /*
    object.create()
  */

   const Person ={
     greet: function(){
        console.log("hello "+this.name)
     }
   }

   const firstPerson = Object.create(Person)
   firstPerson.name ="Athira"
   firstPerson.greet()