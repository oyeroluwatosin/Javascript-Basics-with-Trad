// for loops

// for (let i = 0; i < 10; i++) {
//   if (i === 2) {
//     console.log('2 is my favourite Number');
//     continue; // This keep going with the loop
//   }

// if (i === 5) {
//   console.log('Stop the loop');
//   break; // this put a stop to the loop
// }
//   console.log('Number ' + i);
// }


/*

In while loop, you get to declare the variable outside before the condition

*/

// let i = 0;

// while (i < 10) {
//   console.log('Number ' + i);
//   i++
// }

// DO while

let i = 0;

do{
  console.log('Number '+ i);
  i++;
}

while (i < 10);

// loop can also be used for arrays
const cars =['Ford','Chevy','Honda','Toyota'];

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);// with cars[i], it display them according to their names
// }


//Foreach
cars.forEach(function(car, index, array){
  console.log(`${index} : ${car}`);
});


// MAP
const users = [
  {id: 1, name:'John'},
  {id: 2, name:'Sara'},
  {id: 3, name:'Karen'},
  {id: 4, name:'Steve'}
];

const ids = users.map(function(user){
  return user.id;
});

console.log(ids);

const user ={
  firstName : 'John',
  lastName : 'Doe',
  age: 40
}

for(let x in user){
  console.log(`${x} : ${user[x]}`);
}