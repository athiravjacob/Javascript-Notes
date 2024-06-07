# What is a Promise?
    A Promise is an object representing the eventual completion or failure of an asynchronous operation. It has three states:

    Pending: The initial state, neither fulfilled nor rejected.
    Fulfilled: The operation completed successfully.
    Rejected: The operation failed.
    Creating a Promise
    You can create a Promise using the Promise constructor, which takes a function with two parameters: resolve and reject. These parameters are functions that you call to transition the Promise from the "pending" state to either "fulfilled" or "rejected".



# Promise.all
Promise.all takes an array (or any iterable) of Promises and returns a single Promise that resolves when all the Promises in the array have resolved, or rejects if any of the Promises in the array reject. The resolved value is an array of the resolved values from each Promise.

# Promise.allSettled
Behavior: Promise.allSettled takes an array of Promises and returns a single Promise that:
Resolves when all of the input Promises have settled (either resolved or rejected). The resolution value is an array of objects, each representing the outcome of each Promise. Each object has:
A status property with the value "fulfilled" or "rejected".
A value property if the Promise was fulfilled, or a reason property if the Promise was rejected.
It never rejects.
Use Case: Use Promise.allSettled when you want to know the outcome of all Promises, regardless of whether they were resolved or rejected.

# Key Differences
Resolution and Rejection:

Promise.all resolves only if all Promises resolve. It rejects if any one of the Promises rejects.
Promise.allSettled resolves when all Promises have settled, regardless of whether they resolved or rejected. It provides a complete list of the outcomes of all Promises.
Error Handling:

Promise.all will stop and reject as soon as any Promise in the iterable rejects.
Promise.allSettled continues to wait for all Promises to settle, providing the results of all Promises, including those that were rejected.
