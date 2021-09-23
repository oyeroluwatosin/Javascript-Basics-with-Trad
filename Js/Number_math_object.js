const num1 = 100;
const num2 = 50;
let val;

//Simple math with numbers
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.8);
val = Math.ceil(2.4);// round up to the nearest highest whole number
val = Math.floor(2.4); //round to the nearest lowest number
val = Math.abs(-3); //abs stand for absolute number(i.e it returns the positive value)
val = Math.pow(2,8); //pow stands for raise to the power of
val = Math.min(2, 33,1,55,6,3,-2);// return minimum value
val = Math.max(2, 33,1,55,6,3,-2);// return maximum value
val = Math.random();// This produces random number, this is not advisable
val = Math.random() * 20;// This automatically returns decimal values between 1 to 19
val = Math.floor(Math.random() * 20 + 1);// This return the nearest lowest random numbers from 1 - 20 

console.log(val);