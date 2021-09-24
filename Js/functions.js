// Functions are black of codes that can be defined or used in a program

// function declaration

function greet(firstName){
  //console.log('Hello');
  return 'Hello' + ' ' + firstName;
}

console.log(greet('John'));


// Function expression

const square = function(){
  return x * x;
};

// console.log(square(x=8));

// Immediately invokable function expression - IIFEs

// Syntax
// (function(){
//  console.log('IIFE Ran....');
//})();

// (function(name){
//   console.log('Hello ' + name);
// })('Brad');

// Property methods

const todo = {
  add: function(){
    console.log('Add todo...');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
}

todo.add();
todo.edit(22);