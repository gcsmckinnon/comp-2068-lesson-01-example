// This is a single line comment

/**
 * Returns a random integer between a minimum
 * and maximum number, including the minimum
 * and maximum number.
 * 
 * @param { number } min The starting number in the range
 * @param { number } max The ending number in the range
 * @return { number } The randomly determined integer
 */
function randomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// example of a hoisted variable
var name = "Shaun McKinnon";
if (true) {
  var age = 42;
  var name = "Sarah";
}

// for declaring mutable variables
let hobby = "Diablo";
if (true) {
  let hobby = "Fighting cats";
  console.log(hobby);
}
console.log(hobby);
let x, y, z;

// for declaring immutable variables
const num = 5;
// num = 10;
const h = 5, j = 6, k = 7;

// modifying a constant object's values
const obj = { x: 1, y: 2, z: 3 };
obj.j = 4;

// Concatenation & String templates
const conc = "This is " + "a concatenated " + "string";
const num2 = 10;
console.log("This is the number " + num2);
console.log(5 + 5);
console.log("5" + 5);
console.log("5" * 5);

console.log( `Hello World` );
console.log( `Hello, ${name}. Two plus two equals ${2 + 2}` );
// num2 = "Humphrey"; (causes an error)

try {
  // debugger;
  if (num2 < 20) {
    throw new Error("Num 2 is less than 20!!!!");
  }
} catch (error) {
  console.error(error);
}

console.log("Where am I?");

const constant = true;
if (true) {
  console.log(constant);
  const myScopedVar = "howdy";
}
// console.log(myScopedVar);

// const arr = new Array();
const arr = ['a', 'b', 'c'];
arr.push('d', 'e', 'f');
arr.pop();
arr.shift();
arr.unshift('a');
const spliceVal = arr.splice(1, 3);
console.log(arr.length);
console.log(arr);
delete arr[0];

const myObj = {
  name: "Shaun",
  age: 42,
  hobbies: [
    "Diablo",
    "TV"
  ],
  dob: {
    month: "December",
    day: 22,
    year: 1978
  }
};

console.log(myObj);

// Iterating over an array
const arr2 = ['a', 'b', 'c', 'd'];
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i].toUpperCase());
}

for (let item of arr2) {
  console.log(item.toUpperCase());
}

// Iterating over an object
const obj3 = { x: 1, y: 2, z: 3 };
for (let key in obj3) {
  console.log(obj3[key]);
}

// Destructuring
console.log( Object.entries(obj3) );
for (let [key, value] of Object.entries(obj3)) {
  console.log(key, value);
}

const arr3 = [1, 2, 3];
const [a, b, c] = arr3;
console.log(a, b, c);

const obj4 = { myName: "Shaun", myAge: 42 };
const { myName, myAge } = obj4;
console.log(myName, myAge);
const { myName: theName, myAge: theAge } = obj4;
const obj5 = { a: 7, b: 8, c: 10 };
const { a: eh, b: bee, c: cee = 5 } = obj5;

const person = ["Shaun", 42, true];
function greeting (name, age, status) {
  console.log(name, age, status);
}
greeting(...person);
const clone = [...person];

// Iterative array methods
console.clear();
const myArray = ["Shaun", "Nicholas", "Gillian", "Sky", "Stella"];
myArray.forEach(function (name) {
  console.log(name.toUpperCase());
});
const myCapitalNames = myArray.map(function (name) {
  return name.toUpperCase();
});

const noEsses = myArray.filter(function (name) {
  return !(/^S/.test(name));
});

const myFunckyFunc = function (name) {
  console.log("Do thing");
};
myFunckyFunc("Shaun");

function namedFunction (name) {
  console.log("Do other thing");
}
namedFunction("Shaun");

const arrowFunc = (param1, param2) => {
  return param1 + param2;
};

const arrowFunc2 = (param1, param2) => param1 + param2;

const oneParamAF = param1 => param1 + 10;

if (num2 > 20) console.log("Isn't this cool");
else console.log("Not really...");

for (let item of arr)
  console.log(item);
  console.log("Hey me too");

// ternary
const val = (num2 > 10) ? console.log("Yep") : console.log("Nope");

