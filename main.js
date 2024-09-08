// const age = 30

// console.log(age);

// DATATYPES
// String, Number, Boolean, null, undefined
// const name = "james";
// const age = 20;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;

// console.log(typeof y);

// strings

// const name = "james";
// const age = 20

// concatenation
// const name = 'james';
// const age = 20;
//  const hello = `my name is ${name} and I am ${age}`;
//  console.log(hello)

//
//  const s = 'Hello World'

//  console.log(s.length);
//  const names =['James', 'ken', 'max']

//  console.log(names);
// const person = {
//   firstName: "James",
//   lastName: "Egbo",
//   age: 20,
//   hobbies: ["music", "coding", "game"],
//   address: {
//     street: "12 omachiani st",
//     city: "enugu",
//     state: "Enugu",
//   },
// };

// console.log(person.hobbies[1]);

const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist appt",
    isCompleted: false,
  },
];
// console.log(todos);
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// for

// for  (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// while
// let i=0;
// while(i < 10) {
//     console.log(`while loop Number: ${i}`);
//     i++;
// }
// for(let todo of todos){
//   console.log(todo);
// }

// FOREACH, MAP, FILTER
// const todoText = todos.map(function(todo) {
//   return todo.text
// })
// console.log(todoText);
// const password = 'james'
// const isEmpthy =  ''
// if (password === 'james' || isEmpthy ==="") {
//   console.log('password is correct');
// } else if('passwordEmpthy'){
//   console.log('insert pasword');
// }
// else{
//   console.log('correct');
// }
// const x = 11

// const color = x > 10 ? 'red' : 'blue'
// console.log(color);
// switch (color) {
//   case 'red':
//     console.log('color is red');
//     break;
//   case 'blue':
//   console.log('color is blue');
//   break;

//   default:
//     console.log('color is none');
//     break;
// }

// function addNums(num1, num2) {
//   return num1 + num2;
// }
// console.log(addNums(5,5));

// class
// class Person {
//   constructor(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }
//   getBirthYear(){
//     return this.dob.getFullYear();
//   }

//   getFullName(){
//     return `${this.firstName}, ${this.lastName}`;
//   }
// }

// // instantiate object
// const person1 = new Person("james", "Egbo", "8-7-2004");
// const person2 = new Person("mary", "Egbo", "8-7-2004");


// console.log(person1.getFullName());

// const isPassword = 'jamesUGO'
// const isInvalid = 'james'

// if (isPassword === "jamesugo") {
//   console.log('correct password')
// } else {
//   console.log('password incorrect');
// }
 
