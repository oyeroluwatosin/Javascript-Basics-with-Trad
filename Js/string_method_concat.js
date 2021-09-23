const firstName = 'Oluwatosin';
const lastName = 'Oyero';
const age = 36;
const str = 'Hello there my name is Oyero Oluwatosin';
const tags = 'web design, web development, programming';

let val;

val = firstName + lastName; // This automatically gives us the two names without

//For you to be able to create space between them you make use of concatination

val = firstName + ' ' + lastName;

//Append: This helps to add up to the to our string 

val = 'Brad'
val += 'Traversy'

val ='Hello, my name is ' +firstName + ' and i am '+ age;


//Escaping
val = "That's awesome, I can't wait";

// You can also do it this way with / escape.
val = 'That\'s awesome, i can\'t wait'; 

//length: This get the length of the string
val = firstName.length;

// concat() method
val = firstName.concat(' ', lastName);

// Change Case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// to get index of a value, you then use indexOf() method
val = firstName.indexOf('l'); // This start counting from the front with index 0
val = firstName.lastIndexOf('l'); // This start counting from the back.

//We can also get the index character of a letter. This is also the opposite of indexOf
val = firstName.charAt('2');
// to get the last character you can try
val = firstName.charAt(firstName.length - 1);

// substring
val = firstName.substring(0,3)// Note it does not add the value of index 3

//slice()
val = firstName.slice(0,4);
val = firstName.slice(-3);// This starts from the back to take the last 3 letters

// split()
val = str.split(' '); // This helps to split at the space.
val = tags.split(',');

// replace()
val = str.replace('Oluwatosin','Ayorinde'); // This helps to replace the value searched for.

// include()
val = str.includes('Hello'); // This helps to verify if the value is truly there.

console.log(val);