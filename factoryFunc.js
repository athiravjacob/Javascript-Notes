function createPerson(name){
    return{
        name:name,
        greet:function(){
            console.log(`Hello ${this.name}`)
        }
    }
}

const person1 = createPerson('Athira')
const person2 = createPerson('Manu')

person1.greet();
person2.greet();