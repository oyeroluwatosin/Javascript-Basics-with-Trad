// Create some arrays
const number = [43,56,33,23,44,26,5] //First way
const number2 = new Array(22,45,76,54);
const fruit =['Apple', 'Banana','Orange','Pear'];
const mixed = [22,'Hello',true,undefined,null,{a:1,b:1},new Date()];

let val;

// Get array length
val = number.length

// Check if it's an Array
val = Array.isArray(number);

// Get single values from Array
val = number[3];

// insert into arrays
number[2] = 100;

//find index of value
val = number.indexOf(26);

//Mutating arrays
// Add on to end
number.push(250);
// Add on to front
number.unshift(120);

// Take off from end
number.pop();

// Take off from front
number.shift();

//Splice value
number.splice(1,1);

// Reverse
number.reverse();

// Concatenate array
val = number.concat(number2);

// Sorting arrays
val = fruit.sort();
val = number.sort();

// Use the "compare function"
val = number.sort(function(x,y){
  return x - y;
});

// reverse sorting
val = number.sort(function(x,y){
  return y - x;
});

console.log(number);
console.log(val);