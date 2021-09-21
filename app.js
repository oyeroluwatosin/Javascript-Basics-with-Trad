// This is single line comment

/*
multi
line
comments
*/

//log to console
console.log('Hello World!');
console.log(123);
console.log(true);
console.log([1, 2, 3, 4, 5, 6, 10]);
console.log({ a: 1, b: 2 });
console.table({ a: 1, b: 2 }); // this helps to create your object in a tabular format


// You can also create variables
var greeting = 'Hello';
console.log(greeting);

// We can also create an error message in console
console.error('This is an error');

// To clear your console
console.clear();

// To create a warning
console.warn('This is a big threat to your system be aware')

// If you want to know how long somethings takes on your script then you use console.time
console.time('Hello')
console.log('Hello World!');
console.log('Hello World!');
console.log('Hello World!');
console.log('Hello World!');
console.log('Hello World!');
console.timeEnd('Hello')