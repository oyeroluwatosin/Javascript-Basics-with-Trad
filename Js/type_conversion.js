// Declare the variable, by using let, its possible for you not to assign any value to it
let val;

// Number to string
val = String(5);
val = String(4+4);

// Bool to string
val = String(true);

// Date to string
val = String(new Date());

// Array to string
val = String([1,2,3,4]);

// toString() method
val = (5).toString();
val = (true).toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(false);

// Number methods
// val = parseInt('100.30');// This only handles Integer values
// val = parsefloat('100.30'); // This handles decimal number alone.

// Output
// console.log(val);
// console.log(typeof val); // This helps to display the variable type

// // This helps to show the length of the value assigned to the variable and the method only works on string
// // console.log(val.length); 

// // This method works only for numbers
// console.log(val.toFixed());

// const val1 = 5;
const val1 = String(5);
const val2 = 6;
const sum = val1 + val2

/*
Note: 
- When two integers are added together, they give back an integer values.
- When integer and a string are added together, the result comes out as a string


*/
console.log(sum);
console.log(typeof sum);