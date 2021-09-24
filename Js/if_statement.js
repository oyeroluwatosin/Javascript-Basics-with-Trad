const id ='100';

//Equal to
if (id == 100) {
  console.log('CORRECT')
} else {
  console.log('INCORRECT');
}

// Not Equal to
if (id != 100) {
  console.log('CORRECT')
} else {
  console.log('INCORRECT');
}

// Equal to Value & type
if (id === 100) {
  console.log('CORRECT')
} else {
  console.log('INCORRECT');
}

// Not Equal to Value & type
if (id !== 100) {
  console.log('CORRECT')
} else {
  console.log('INCORRECT');
}

// Test if undefined
if (typeof id !== 'undefined') {
  console.log(`The ID is ${id}`);
} else {
  console.log('No ID');
}

// Greater or less than
if (id <= 100) {
  console.log('Correct')
} else {
  console.log('Incorrect')
}

//if else if
const color ='yellow'
if (color === 'red') {
  console.log('color is red');
} else if(color === 'blue'){
  console.log('color is blue'); 
}else{
  console.log('color is not red or blue');
}

// Logical operatives

const name = 'Steve';
const age = 20;

// > - greater than, < - less than
// AND &&
if(age > 0 && age < 12){
  console.log(`${name} is a child`);
}else if(age >= 13 && age <= 19){
  console.log(`${name} is a teenager`);
}else {
  console.log(`${name} is a adult`);
  }

// OR ||
if(age < 16 || age > 65){
  console.log(`${name} can not run in race`);
}else{
  console.log(`${name} is registered for the race`);
}

// Ternary operator
console.log(id === 100 ? 'CORRECT':'INCORRECT');

