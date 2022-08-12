/* 
 programming is the act of writing a program which the computer can execute to produce the desired result

 A computer program is a sequence of simple logical instructions or statements that is in a form  the computer can understand

*/

//js is a lightweight , interpreted language( it is read line by line as it is executed, the opposite is a compiled language where all the contents of the code is read in its entirety before it is executed ) with first class functions( functions are treated as variables )

//it is primarily used for scripting webpages but it is also used on the server

/*
multi line comment
it 
has 
four lines here
*/

//single line comment

//Numbers integers and floating points(floating points are approximations not exact values)

//integers
// let x = 5;
// let y = 3;

//floating points
// let x = 3.0;
// let y = 2.0;

// arithmetic operations
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);

//Strings
// let name = "John";
// let age = "30";
// let sentence = "Hello, my name is " + name + ". I am " + age + " years old.";
// let fmtStr = `Hello, my name is ${name}. I am ${age} years old.`;
// console.log(sentence);
// console.log(fmtStr);

//Booleans
// let isEven = true;
// let isOdd = false;
// let isDivisibleBy3 = (x % 3 == 0);
// console.log(isEven);
// console.log(isOdd);

//Null and Undefined empty values

//comparing values
// x = 5;
// y = 3;
// console.log(x == y);
// console.log(x != y);
// console.log(x > y);
// console.log(x < y);
// console.log(x >= y);
// console.log(x <= y);

//logical operators
// x = 5;
// y = 3;
// console.log(x > y && x < y);
// console.log(x > y || x < y);
// console.log(!(x > y));
//these are binary operators they work on two values

//automatic type conversion
// x = "5";
// y = 3;
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);

// control flow
// if (x > y) {
//     console.log("x is greater than y");
// } else {
//     console.log("x is less than y");
// }

// if (x > y) {
//     console.log("x is greater than y");
// } else if (x < y) {
//     console.log("x is less than y");
// } else {
//     console.log("x is equal to y");
// }

// tenary operator -> operates on three values at once
//false ? console.log(1) : console.log(2);

// binary operator -> operates on a single value
// console.log(typeof x)

// switch (x) {
//     case 1:
//         console.log("x is 1");
//         break;
//     case 2:
//         console.log("x is 2");
//         break;
//     case 3:
//         console.log("x is 3");
//         break;
//     default:
//         console.log("x is not 1, 2, or 3");
// }

// can also work for strings
// let name = "john";
// switch (name) {
//   case "john":
//     console.log(`his name is ${name} snow`);
//     break;
//   case "jane":
//     console.log(`her name is ${name} white`);
//     break;
//   default:
//     console.log("neither john or jane.");
//     break;
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// while (x < 10) {
//     console.log(x);
//     x++;
// }

// do {
//     console.log(x);
//     x++;
// } while (x < 10);

//Arrays -> collections of values
// let names = ["John", "Jane", "Mary"];
// console.log(names);
// console.log(names[0]);
// console.log(names[1]);

// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers);
// console.log(numbers[0]);
// console.log(numbers[1]);

// let mixed = [1, "John", true];
// console.log(mixed);
// console.log(mixed[0]);
// console.log(mixed[1]);

// object literals -> key value pairs
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   hobbies: ["music", "movies", "sports"],
//   address: {
//     street: "50 main st",
//     city: "Boston",
//     state: "MA",
//   },
// };
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.hobbies);
// console.log(person.hobbies[0]);
// console.log(person.address.city);

// const {
//   firstName,
//   lastName,
//   address: { city },
// } = person;
// console.log(firstName);
// console.log(lastName);
// console.log(city);

// functions -> pure and impure functions

// function sayHello(name) {
//     console.log("Hello " + name);
// }
// sayHello("John");

//const sayHello = function(name) {
//    console.log("Hello " + name);
//}
//sayHello("John");

//const sayHello = (name) => {
//    console.log("Hello " + name);
//}
//sayHello("John");

//const sayHello = (name) => console.log("Hello " + name);
//sayHello("John");
// functions with default parameters
// const sayHello = (name = "Anonymous") => console.log("Hello " + name);
// sayHello();
// sayHello("John");

// classes -> blueprint for creating objects
// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthday = new Date(dob);
//     }
//     greeting() {
//         return `Hello there ${this.firstName} ${this.lastName}`;
//     }
//   calculateAge() {
//       const diff = Date.now() - this.birthday.getTime();
//       const ageDate = new Date(diff);
//       return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }
// }

// const john = new Person("John", "Doe", "11-13-1980");
// console.log(john.greeting());
// console.log(john.calculateAge());

// variable scopes
// let scopes the variables to the context they were defined in
// var scopes the variables globally
// const scopes the variables globally but they cannot be changed

// const PI = 3.14;
// reassignment results in an error
// PI = 2.1;
// console.log(PI);

// higher order functions -> functions that take other functions as arguments or return other functions
// function add(x) {
//   return (y) => {
//     return x + y;
//   };
// }

// function addTwo(x, func) {
//   return func(x);
// }

// beyond the browser
// node js -> server side javascript , database
// frontend -> html -> css
