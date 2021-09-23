const person = {
  firstName : 'Steve',
  lastName : 'Smith',
  age: 30,
  email: 'steve@email.com',
  hobbies : ['music','sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear : function(){
    // return 1994;
    return 2021 - this.age
  }
}

let val;

val = person;
// Get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];
val = person.address['city'];
val = person.getBirthYear();

console.log(val);
