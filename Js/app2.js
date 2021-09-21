// Various varibale declaration with Java

//We can use the following var, let, const

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// //Note: you can always reassign values when you use Var and let.

// // Initalize Var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// //Rules and convention in Variable in Javascript

// /*
// They include letters,numbers, _,$
// Cannot start with number
// $ is only advisable when you are making use of jquery
// */

// //Multi word vars
// var firstName = 'John'; // Camel case
// var first_name = 'Sara'; //Underscore
// var FirstName = 'Tom';
// var firstname;

// LET
// let name;
// name = 'John Doe';
// console.log(name);
// name = 'Steve Crown';
// console.log(name);

//CONST
// const name = 'John';
// console.log(name);
// Cannot reassign the variable
// name = 'Sara';


// While using object you can change the value of an object variable
const person = {
    name: 'John',
    age: 30,
}

person.name = 'Sara';

console.log(person);