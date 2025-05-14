//Solve these problems:

//#1 Create a one line function that adds adds two parameters

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3) // 13

// addTo(10) is called, so:
// x = 10
// It returns the function y => x + y
// That returned function (addToTen) still has access to x = 10,
// even though the original call to addTo is over.
// → This is possible because of a closure:
// The inner function closes over x and remembers its value.


//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1) // 31

// curriedSum(30) returns a new function: (b) => 30 + b
// Then (...)(1) calls that returned function with b = 1
// So: 30 + 1 = 31

// This is currying:
// Instead of one function with two parameters (sum(a, b)),
// you break it down into a chain of one-argument functions.


//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12) // 17



//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));  //the function g runs first, and its result is passed to f
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10) // 16 >> g = add5: add5(10) → 15
                        // f = add1: add1(15) → 16

// the right-hand function (g) runs first, and its result is passed to the left-hand function (f).



//What are the two elements of a pure function?
1. Deterministic --> always produces the same results given the same inputs
2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.