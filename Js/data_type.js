/*
Primitive Data types:
- Stored directly in the location the variable accesses
- Stored on the stack
The Primitive types are String, Numbers, Boolean, Null, Undefined and Symbols(Es6)

Reference Data Types:
- Accessed by reference
- Objects that are atored on the heap
- A pointer to a location in memory.
They are: Arrays, object literals,functions,Dates, Anything Else
*/

// Primitive types

// String
const name = 'John Doe';

//Number
const age = 45;

//Boolean
const hasKids = true;

//Null
const car = null;

// Undefined
let test;

//Symbol
const sym = Symbol();

//REFERNCE TYPES - Object
//Array
const hobbies = ['movies', 'music'];

//Object Literal
const address = {
    city: 'Boston',
    state: 'MA'
}
const today = new Date();
console.log(today);
console.log(typeof address);