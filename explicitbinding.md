# Explicit binding 
refers to the process of explicitly setting the value of this for a function. This can be done by using the call, bind, or apply methods provided by JavaScript.

1: Call Method
const person = {
  name: 'John Doe',
  age: 30,
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
};

const anotherPerson = {
  name: 'Jane Doe',
  age: 25
};

person.greet.call(anotherPerson); // Output: Hello, my name is Jane Doe and I'm 25 years old.
In the above example, we have defined a person object with a greet method that logs the name and age of the person. We then create another object called anotherPerson and use the call method to call the greet method of the person object with the anotherPerson object as the this value. As a result, the name and age properties of anotherPerson are logged instead of those of person

