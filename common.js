// alert("hello world!");
console.log("welcome");
console.error("this is an error");
console.warn("this is warning");

//var-global scope, let-reassign, const

var age = 30;
age = 31;
console.log(age);

let age1 = 30;
age1 = 31;
console.log(age1);

const age2 = 30;
// age2 = 31;
console.log(age2);

let score;
score = 10;
console.log(score);

// const score;
// score = 10;
// console.log(score);

const score1 = 11;
console.log(score1);

//String, Numbers, Boolean, Null, Undefinied

const name = "john";
const age3 = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof name);
console.log(typeof age3);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

//Strings

const name1 = "john";
const age4 = 30;

//concatenation
console.log("My name is " + name1 + " and my name is" + age);
//Template String es5
console.log(`My Name is ${name1} and my age is ${age4}`);

const hello = `My Name is ${name1} and my age is ${age4}`;
console.log(hello);

//String Properties and Methods
const s = "hello world";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5));
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(""));

const s1 = "technology, computer, it, code";
console.log(s1.split(""));
console.log(s1.split(","));

//Arrays
/*Multi 
line
comments*/
const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);
const fruits = ["apples", "pears", "oranges", "45", "true"];
console.log(fruits);
console.log(fruits[2]);
//can do this
fruits[3] = "grapes";
console.log(fruits);
//can't do this
//fruits = [];

fruits.push("mangos");
console.log(fruits);
fruits.unshift("banana");
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(Array.isArray(hello));
//console.log(Array.isArray(pears));
console.log(Array.isArray(fruits));
