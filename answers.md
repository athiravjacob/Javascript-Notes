# Datatypes in Js
 * Primivitive Datatypes
    Number
    String 
    Boolean
    Null
    Undefined
    Symbol
    BigInt
 * Non Primitive Datatype
    Object
    Array
    Function
    Regex

* Js is dynamically typed because like many other languages it doesnt want to mention the datatype, we can use let or var for a variable  declartion
* NaN : Not a number


# Lexical Environment, Scope chain
    Every execution context has a reference to its outer environment, and that outer environment is called Lexical Environment.
    Where ever an execution context is created, a lexical env is also created. So, Lexical env is local memory, along with lexical environment of it’s parent.
    Scope means where you can access a specific function or variable .
    1. Lexical environment is created whenever an execution context is created. So, Lexical environment = Local memory + Reference to lexical env of parent.
    
    2 . Parent i.e Lexical Parent is where actually that function sits inside the code.

    3. Chain of Lexical Env is known as Scope Chain. And it defines whether a variable or function is present inside the scope or not.

# This Keyword
    Global context: this is the global object (window in browsers, global in Node.js).
    Function context: this is the global object in non-strict mode and undefined in strict mode.
    Method context: this is the object the method is called on.
    Constructor context: this is the new instance being created.
    Arrow functions: this is lexically inherited from the surrounding context.
    Event listeners: this is the element that received the event.
    Explicit binding: Use call, apply, and bind to set this explicitly.

* A variable that has been declared but not assigned a value is undefined.
* A variable that has not been declared at all is not defined.
* Null is an intentional absence of value

# falsy Values
    A falsy value is a value that is considered false when evaluated in a boolean context. These are typically values that represent nothingness, emptiness, or the number zero. Common examples of falsy values include: false, 0 [],{},null

# Type coercion
 
  * Number(value), it’s called explicit type coercion (or type casting).
  * values can also be converted between different types automatically, and it is called implicit type coercion. 

    true + false
    12 / "6"
    "number" + 15 + 3
    15 + 3 + "number"
    [1] > null
    "foo" + + "bar"
    'true' == true
    false == 'false'
    null == ''
    !!"false" == !!"true"
    [‘x’] == ‘x’
    [] + null + 1
    [1,2,3] == [1,2,3]
    {}+[]+{}+[1]
    !+[]+[]+![]

# instanceof
    The instanceof operator tests to see whether the operand is an instance, or object, of a certain class.

            class Person {
        constructor(name,age) {
        this.name = name
        this.age = age
        } 
        }

        const person = new Person('David',22)
        const david = new Person

        console.log(person instanceof Person;)
        //true

    console.log(david instanceof Person;)
    //true

# Function statement
        function addNumbers(a, b) {
            return a + b;
    }
# function Expression Anonymous Function
     const sum = function{
        console.log(4+5)
     }
#   Named function expression
    var greet = function greetFunction(name) {
    return "Hello, " + name + "!";
};
# Arrow Function
    const sum =(x,y)=> x+y

* First-Class Functions is a property of a programming language, indicating that functions can be treated as Variables. It's about what you can do with functions in the language.

* Higher-Order Functions is a concept related to the use of functions, indicating that functions can take other functions as arguments or return functions as results. It's about how functions are used in the code.

# Generator Functions
    A generator function is a special type of function in JavaScript that allows pausing and resuming its execution during runtime. Unlike regular functions, which run to completion, generator functions can be paused and resumed multiple times, making them particularly useful for dealing with asynchronous operations, handling large datasets, and writing custom iterators.

    Generator functions are defined using the function* syntax, and they use the yield keyword to pause the function's execution and produce a value. When a generator function is called, it returns an iterator object, which can be used to control the function's execution.


                    function* simpleGenerator() {
                            yield 1;
                            yield 2;
                            yield 3;
                        }

                        const iterator = simpleGenerator();
                        console.log(iterator.next()); // Output: { value: 1, done: false }
                        console.log(iterator.next()); // Output: { value: 2, done: false }
                        console.log(iterator.next()); // Output: { value: 3, done: false }
                        console.log(iterator.next()); // Output: { value: undefined, done: true }

    The next() method is used to resume the execution of a generator function 
    The return() method allows us to force a generator to complete before it reaches the end

                    function* generatorWithReturn() {
                        yield 1;
                        yield 2;
                        yield 3;
                        }

                    const iterator = generatorWithReturn();
                    console.log(iterator.next()); // Output: { value: 1, done: false }
                    console.log(iterator.return("Finished!")); // Output: { value: "Finished!", done: true }
                    console.log(iterator.next()); // Output: { value: undefined, done: true }

# PURE function
     * A pure function:
        Always produces the same output given the same input.
        Has no side effects, meaning it doesn't modify any external state or perform observable interactions with the outside world (like modifying a global variable, logging to the console, or modifying a passed-in object).

            function add(a, b) {
                    return a + b;
                }

                console.log(add(2, 3)); // Output: 5
                console.log(add(2, 3)); // Output: 5 (same input, same output)
                console.log(add(4, 1)); // Output: 5 (same input, same output)

                Here are some characteristics of pure functions:

                    They always produce the same output for the same input.
                    They do not modify any variables or data outside their scope.
                    They do not rely on any external state or context.
                    They do not have side effects.

# Nullish operator
    It is used to handle variables having values with null or undefined
    a way to handle null and undefined values by allowing you to specify a default value when encountering these nullish values. 
    var result = null ?? 'Default string '

# Set
A Set is a data structure in JS that represents a collection of unique values. It is similar to an array but only allows for unique elements
set uses methods
set.add(),set.delete(),set.has()
forEach or for...of can be used to itreate through set

# WeakSet
WeakSets can only contain objects. If you try to add anything else than an object JavaScript will throw an error. These objects must be also unique. If you try to add some object twice, the second will not be added.

if you remove all other references to object stored in a WeakSet that object will be, garbage collected.

ou can’t iterate over it with some loop. There is also no size property that would tell you how many items are in a particular WeakSet

You can add items or remove any existing. You can also check if WeakSet contains specific item.


# Map
A Map is a collection of key-value pairs where both keys and values can be of any type.
Keys: Map can use any type of value (objects, primitives, etc.) as keys.
Garbage Collection: Entries in a Map are strongly referenced, meaning that they are not garbage collected as long as the Map itself is reachable.
Iteration: Map is iterable and maintains the order of its elements. You can iterate over a Map using methods like map.keys(), map.values(), map.entries(), and the for...of loop.
Size Property: Map has a size property that gives the number of key-value pairs in the Map.
Methods: Common methods include set(key, value), get(key), delete(key), has(key), and clear().