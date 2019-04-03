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
console.log(fruits.indexOf("oranges"));

//Objects

const person = {
  firstName: "john",
  lastName: "doe",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "23,mill road",
    city: "nottingham",
    county: "NG"
  }
};

console.log(person);
console.log(person.firstName, person.age);
console.log(person.hobbies[1]);
console.log(person.address.city);
//Actual variables es6
const { firstName, lastName } = person;
console.log(firstName);

const {
  hobbies,
  address: { city }
} = person;
console.log(hobbies);
console.log(city);

person.email = "john@gmail.com";
console.log(person);

//Array of Objects

const todo = [
  {
    id: 1,
    text: "take out trash",
    isCompleted: true
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true
  },
  {
    id: 3,
    text: "Dentist Appointment",
    isCompleted: false
  },
  {
    id: 4,
    text: "Hair do",
    isCompleted: true
  },
  {
    id: 5,
    text: "call nurse",
    isCompleted: false
  }
];

console.log(todo);
console.log(todo[1].text);

//JSON

const todoJSON = JSON.stringify(todo);
console.log(todoJSON);

//For Loop

for (let i = 0; i < todo.length; i++) {
  console.log(todo[i].text);
}

for (let t of todo) {
  console.log(todo);
  console.log(t.id);
  console.log(t.text);
}

//forEach, map, filter higher order array methods
todo.forEach(function(t) {
  console.log(t.text);
});

const todoText = todo.map(function(t) {
  return t.text;
});
console.log(todoText);

const todoCompleted = todo.filter(function(t) {
  return t.isCompleted === true;
});
console.log(todoCompleted);

const todoCompletedMap = todo
  .filter(function(t) {
    return t.isCompleted === false;
  })
  .map(function(t) {
    return t.text;
  });
console.log(todoCompletedMap);

const todoCompletedMapId = todo
  .filter(function(t) {
    return t.isCompleted === false;
  })
  .map(function(t) {
    return t.id;
  });
console.log(todoCompletedMapId);

//Conditionals

const a = 10;
if (a == 10) {
  console.log("a is 10");
}

const a1 = "10";
if (a1 == 10) {
  console.log("a1 is 10");
}

const a3 = "10";
if (a3 === 10) {
  console.log("a3 is 10");
} else {
  console.log("a3 is not 10");
}

const b = 20;

if (b === 10) {
  console.log("b is 10");
} else if (b > 10) {
  console.log("b is larger than 10");
} else {
  console.log("b is smaller than 10");
}

const c1 = 4;
const c2 = 11;
if (c1 > 5 || c2 > 10) {
  console.log("x is more than 5 or y is more than 10");
}

if (c1 < 5 && c2 > 10) {
  console.log("x is less than 5 or y is more than 10");
}

//Ternery Operator
const t = 10;

const color = t > 10 ? "red" : "blue";
//const color = "green";
console.log(color);

switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  case "pink":
    console.log("color is pink");
    break;
  default:
    console.log("Not red or blue");
    break;
}

//Functions

/* function addNumbers(num1, num2) {
  console.log(num1 + num2);
}
addNumbers(5, 4); */

/* function addNumbers(num1 = 1, num2 = 1) {
  console.log(num1 + num2);
}
addNumbers(); */

function addNumbers(num1 = 1, num2 = 1) {
  return num1 + num2;
}
console.log(addNumbers(5, 8));

//es6 arrow funtion

const addNum1 = (num1 = 1, num2 = 1) => {
  console.log(num1 + num2);
};
addNum1();

const addNum2 = (num1 = 1, num2 = 1) => console.log(num1 + num2); //single line
addNum2(5, 4);

const addNum3 = (num1 = 1, num2 = 1) => num1 + num2;
console.log(addNum3(5, 3));

const addNum4 = (num1 = 1, num2 = 1) => {
  return num1 + num2; //return will not work in single line
};
console.log(addNum4(5, 2));

const addNum5 = (num = 1) => num + 5;
console.log(addNum5(5));

todo.forEach(t => console.log(todo));
todoCompleted.forEach(p => console.log(todoCompleted));
todoCompletedMap.forEach(m => console.log(todoCompletedMap));
todoCompletedMapId.forEach(i => console.log(todoCompletedMapId));

//Oops
//Constructor
function Person(firstName1, lastName1, dob) {
  //Constructor names starts with CAP P
  this.firstName1 = firstName1; //set properties of objects
  this.lastName1 - lastName1;
  this.dob = new Date(dob);

  //this function returns as object in console

  /* this.getFullName = function() {  
    return `${firstName1} ${lastName1}`;
  };
  this.getBirthDay = function() {
    return this.dob.getDay();
  };
  this.getBirthMonth = function() {
    return this.dob.getMonth();
  };*/

  // to avoid use prototype instead of this
  Person.prototype.getFullName = function() {
    return `${firstName1} ${lastName1}`;
  };
  Person.prototype.getBirthDay = function() {
    return `${this.dob.getDay()}`;
  };
  Person.prototype.getBirthMonth = function() {
    return this.dob.getMonth();
  };
}
//Instantiate object
const person1 = new Person("john", "son", "3-1.2001");
console.log(person1);
const person2 = new Person("mary", "john", "3-1-1980");
console.log(person2);
console.log(person1.firstName1);
console.log(person1.dob);
console.log(person2.dob);
console.log(person2.dob.getFullYear());
console.log(person2.dob.getUTCMonth());
console.log(person2.getFullName());
console.log(person2.getBirthDay());
console.log(person2.getBirthMonth());
console.log(person1);

//Class
class Persons {
  constructor(firstName2, lastName2, dob2) {
    this.firstName2 = firstName2;
    this.lastName2 = lastName2;
    this.dob2 = new Date(dob2);
  }
  getFullName1() {
    return `${this.firstName2} ${this.lastName2}`;
  }
  getBirthYear1() {
    return this.dob2.getFullYear();
  }
  getBirthDay1() {
    return `${this.dob2.getDay()}`;
  }
  getBirthMonth1() {
    return this.dob2.getMonth();
  }
}

const persons1 = new Persons("jass", "son", "3-1.1981");
console.log(persons1);
const persons2 = new Persons("tom", "john", "3-1-1975");
console.log(persons2);

console.log(persons2.getFullName1());
console.log(persons1.getBirthYear1());
console.log(persons2.getBirthDay1());
console.log(persons2.getBirthMonth1());

//DOM
console.log(window);
/* alert(1);
window.alert(1); */

//Single Element
/* const form = document.getElementById('my-form');
console.log(form); */
console.log(document.getElementById("my-form"));
console.log(document.querySelector("#my-form")); //querySelector works like jquery
console.log(document.querySelector("h1"));
console.log(document.querySelector(".container"));

//Multiple Element
/* console.log(document.querySelectorAll(".item")); //Node list
console.log(document.getElementsByClassName("item")); //HTML collection can't use as array methods
console.log(document.getElementsByTagName("li"));
 */
//Loop through
const items = document.querySelectorAll(".item");
items.forEach(i => console.log(i));

const ul = document.querySelector(".users");
console.log(ul);

const input = document.querySelector("#email");
input.style.border = "2px solid orange";

const btn = document.querySelector(".btn");
btn.style.border = "2px solid orangered";
/* btn.addEventListener("click", e => {
  //can add any eventlisteners like mouseover, mouseout
  e.preventDefault();
  console.log(e);
  console.log(e.target);
  console.log(e.target.className);
  document.querySelector("#my-form").style.background = "grey";
  document.querySelector("body").classList.add("bg-color");
  document.querySelector(".users").lastElementChild.innerHTML =
    "<h1>Welcome Back</h1>";
}); */
//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = "hello";
ul.children[1].innerText = "priya";
ul.lastElementChild.innerHTML = "<h4>welcome</h4>";

const myForm = document.querySelector("#my-form");
const msg = document.querySelector(".msg");
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const listUser = document.querySelector("#user");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  //  console.log(inputName);
  // console.log(inputName.value);
  // console.log(inputEmail.value/);

  if (inputName.value === " " || inputEmail.value === " ") {
    //  alert('fill');
    msg.classList.add("error");
    msg.innerHTML = "please fill all the values";
    msg.style.background = "red";

    setTimeout(() => msg.remove(), 3000);
  } else {
    // console.log("success");
    msg.classList.add("error");
    msg.innerHTML = "success";
    msg.style.background = "red";
    const li = document.createElement("li");
    ul.appendChild(
      document.createTextNode(`${inputName.value} : ${inputEmail.value}`)
    );
    listUser.appendChild(li);

    inputEmail.value = " ";
    inputName.value = " ";
    li.style.width = "100%";
  }
}
/* myForm.addEventListener("submit", e => {
  e.preventDefault();
  // console.log(inputEmail);
  // console.log(inputEmail.value);
  if (inputName.value === null || inputEmail.value === null) {
    alert("fill");
    return false;
  }
}); */
