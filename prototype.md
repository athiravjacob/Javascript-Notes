a prototype is an object that other objects inherit properties and methods from
prototypes allow properties and methods to be shared among instances of the function or object

# Prototype Inheritance
Properties or methods added to the prototype of a constructor function are accessible to all objects derived from it. 

# JavaScript Prototype Chaining
JavaScript always searches for properties in the objects of the constructor function first. Then, it searches in the prototype.
This process is known as prototype chaining. 

What is an object prototype in JavaScript?

An object prototype is a mechanism by which JavaScript objects inherit properties and methods from another object. Every JavaScript object has a prototype, which is also an object. Prototypes allow objects to share properties and methods, enabling inheritance

__proto__ is an object property that points to the prototype object from which it was inherited. It is used for looking up properties in the prototype chain.
prototype is a property of constructor functions. It is used to assign properties and methods that should be inherited by instances created by the constructor function.


# Prototypal inheritance
 is a feature in JavaScript where objects can inherit properties and methods from other objects. This mechanism allows for a more flexible and dynamic way to create and share behaviors among objects compared to classical inheritance (like in Java or C++).

Key Concepts of Prototypal Inheritance:
Prototype Object:

Every JavaScript object has an internal property called [[Prototype]] (commonly accessed via __proto__), which points to another object, known as its prototype.
The prototype object can have its own properties and methods, which the original object can access through the prototype chain.
Prototype Chain:

When a property or method is accessed on an object, JavaScript first looks for it on the object itself. If it doesn't find it there, it looks up the [[Prototype]] chain, continuing until it finds the property/method or reaches the end of the chain (null).
This chain of objects linked by the [[Prototype]] property is called the prototype chain.
Object.create():

This method allows you to create a new object with a specified prototype. It is a modern and flexible way to set up inheritance.

# Object.create() 
    is a method that creates a new object, using an existing object as the prototype of the newly created object. This method allows you to set up prototypal inheritance directly and more flexibly than using constructor functions.