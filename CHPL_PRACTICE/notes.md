# shallow copy and deep copy
## Defiantion
Shallow copy:
 Creates a new object or array, but nested objects or arrays inside it are still referenced from the original.
 or:
 Duplicates only the top level.

 Deep copy:
 Creates a new object or array, and also copies all nested objects or arrays inside it, making a completely independent copy.
 or:
 Duplicates all levels.

 # promises:
## In JavaScript, a promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It helps manage asynchronous tasks more effectively.

# Key Concepts of Promises

## States of a Promise
- **Pending**: The initial state; the operation has neither been completed nor failed.
- **Fulfilled**: The operation completed successfully.
- **Rejected**: The operation failed.

## Methods of a Promise
- **then()**: Called when the promise is fulfilled. It takes two optional arguments: a callback for the resolved value and a callback for the rejected value.
- **catch()**: Called when the promise is rejected. It only takes one argument, a callback for the rejection reason.
- **finally()**: Called when the promise is settled (either fulfilled or rejected), and it does not receive any arguments.
 

 # Asynic and await
                            
                            ## Async Function
- **Definition**: The `async` keyword is used to declare a function that will handle asynchronous operations.
- **Usage**: An `async` function automatically returns a promise, and any value returned inside the function is wrapped in a promise.

## Await Expression
- **Definition**: The `await` keyword is used inside `async` functions to pause the execution of the function until the promise is resolved.
- **Usage**: It can only be used inside an `async` function.
  


  # hoisting
**Defination**: Hoisting is JavaScript's default behavior of moving declarations to the top of their scope (the global scope or function scope) before code execution.
ex:....


# Spread and rest operator
**Spread** : The spread operator (...) is used to expand or spread element from an iterable(such as an array ,string,or object) into individual elements.

ex:
let arr=[1,2,3,4,5];
console.log(...arr)//1,2,3,4,5

**uses**: 1.*copying an array* 
         ** E **:let arr=[1,2,3,4,5];
                  let copiedArr=[...arr];
                  comnsole.log(copiedArr)
2.*mering an array*
3.*passing multiple argument to a array*


   # rest operator
  **defination** :The rest operator is used in function parameters to callect the rest paremeters to collect all remaining argument into an array
    
    ex:
    display(1,2,3,4,5,6)
    function display(first,second,...rest){
      console.log(first);
      console.log(second);
      console.log(rest)
    }

**note** :Rest opetator always return array



# clouser
A closure is a function that remembers the variables from the place where it was created, even after the outer function has finished executing.

# map and set difference

  ## Map Function
- **Purpose**: The `map` function is used to create a new array by applying a function to each element of an existing array.
- **Usage**: Commonly used for transforming data in arrays.

## Set Function
- **Purpose**: The `Set` function is used to create a collection of unique values, meaning no duplicates are allowed.
- **Usage**: Commonly used for storing unique values and removing duplicates from arrays.

# TOD
The temporal dead zone is a concept that occurs when using let and const declarations. It refers to the period of time during which these variables are not accessible even though they are declared.