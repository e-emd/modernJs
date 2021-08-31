// Log to console
console.log('Hello World');
console.log(123);
console.log(true);
console.log([1, 4, 5]);
console.log({ a: 1, b: 3, c: 4 });
console.table({ a: 1, b: 3, c: 4 });

console.clear();
console.warn('This is warning');

// var, let, const
var name = 'John Doe';
console.log(name);

name = 'Steve Smith';
console.log(name);

// Init var
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

// letters, numbers, _, $
// Can not start with number

// Multi words vars
var firstName = 'John'; // Camel case
var first_name = 'Sara'; // Underscore
var FirstName = 'Tom'; // Pascal case
var firstname = '';

// LET
let number;
number = 1;
console.log(number);
number = 2;
console.log(number);

// CONST
const lastName = 'Doe';
console.log(lastName);
// Can not reassign
// name = 'Sara'
// Have to assign a value

const person = {
  name: 'John',
  age: 30,
};

person.name = 'Sara';
person.age = 33;

console.log(person);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);

console.log(numbers);

// PRIMITIVE

// String
const string = 'John';
// Number
const age = 45;
// Boolean
const hasKids = false;
// Null
const car = null;
// Undefined
let test;
console.log(test);
// Symbol
const sym = Symbol();

// REFERENCE TYPES - Objects
// Array
const hobbies = ['movies', 'music'];
// Object literal
const address = {
  city: 'New York',
  state: 'NY',
};
const today = new Date();

let val;

// Number to String
val = String(555);
val = String(4 + 4);
// Bool to String
val = String(true);
// Date to String
val = String(new Date());
// Array to string
val = String([1, 3, 4]);

// toString()
val = (5).toString();
val = true.toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(null);
val = Number('hello');
val = Number([1, 3, 4]);

val = parseInt('200.9');
val = parseFloat('122.33');

// Output
console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed(2));

const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);

// Math
const num1 = 100;
const num2 = 59;

val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(3.4);
val = Math.floor(3.4);
val = Math.sqrt(65);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2, 4, 55, 8, 0, -9);
val = Math.max(2, 4, 55, 8, 0, -9);
val = Math.random();

val = Math.floor(Math.random() * 20 + 1);

console.log(val);

// String
const name1 = 'Will';
const last1 = 'Johnson';
const str = 'Hello there my name is Edwin';
const tags = 'shirt, hoodie, pants, jacket';

let val3;

val3 = name1 + last1;

// Concatenation
val3 = name1 + ' ' + last1;

// Append
val3 = 'Edwin ';
val3 += 'Marquez';

val3 = 'Hello, my name is ' + name1 + ' and I am ' + age;

// Escaping
val3 = "That's awesome, I can't wait";

// Length
val3 = name1.length;

// Concat
val3 = name1.concat(' ', last1);

// Change case
val3 = name1.toUpperCase();
val3 = lastName.toLowerCase();

val3 = name1[3];

// IndexOf()
val3 = name1.indexOf('l');
val3 = name1.lastIndexOf('l');

// CharAt()
val3 = name1.charAt('3');
// Get last char
val3 = name1.charAt(name1.length - 1);

// substring()
val3 = name1.substring(0, 3);

// slice()
val3 = name1.slice(0, 3);
val3 = name1.slice(-3);

// split()
val3 = str.split(' ');
val3 = tags.split(',');

// replace()
val3 = str.replace('Edwin', 'Dew');

// includes()
val3 = tags.includes('shoes');

console.log(val3);

// Template Literals
const job = 'Web Dev';
const city = 'Miami';
let html;

// Template strings
html = `
  <ul>
    <li>${name1}</li>
    <li>${age}</li>
    <li>${job}</li>
    <li>${city}</li>
  </ul>
`;

// Create some arrays
const numArray = [1, 2, 3, 4, 5];
const numArray2 = new Array(6, 7, 8, 9, 0);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 2 }, new Date()];

let value;

// Get array length
value = numArray.length;
// Check if is array
value = Array.isArray(numArray);

// Get single value
value = numArray[3];
value = numArray[0];
// Insert
numArray[2] = 20;
// Find index value
value = numArray.indexOf(20);

// MUTATING ARRAYS

console.log(value);
console.log(numArray);
