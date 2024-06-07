# this
 refers to the current execution context and depends on how a function is invoked. 
To grasp this concept, consider this as a placeholder that gets replaced with the object calling the function.
“This” keyword refers to an object that is executing the current piece of code. 
# Default Binding
When a function is invoked in the global scope, this refers to the global object (window in browsers, global in Node.js).
# Implicit Binding
In the case of object methods, `this` refers to the object the method is called on
# Explicit Binding
You can explicitly set the value of this using call(), apply(), or bind() methods.
# Arrow Functions and 'this'
Arrow functions do not have their own this context. Instead, they inherit it from the enclosing scope.
