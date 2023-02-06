// var let const

// console.log("Hello World!");
// for (var i = 0; i < 7; i++) {
//   console.log("for" + i);
// }
// console.log("outside " + i);

// for (let i = 0; i < 7; i++) {
//   console.log("for" + i);
// }
// console.log("outside " + i);

// const k = 50;
// console.log(k);

// object
// const person = {
//   name: "Jose Jake",
//   age: 21,
//   walk() {
//     console.log("walking...");
//   },
// };

// dot operator
// console.log(person.name);
// person.walk();

// let targetMember = "name";
// console.log(person[targetMember]);

// const firstName = "Manuel";
// const lastName = "Quezon";
// const age = 25;
// const ageIncrement = 10;

// const fullName =
//   firstName + " L. " + lastName + " is " + age + ageIncrement + " years old";
// console.log(fullName);

// // template literal
// const fullName2 = `${firstName} L. ${lastName} is ${
//   age + ageIncrement
// } years old`;
// console.log(fullName2);

// ternary operator
// const a = "blue";
// const tag = a === "green" ? "isGreen" : "notGreen";
// console.log(tag);

// const age = 19 && 21
// console.log(age)
// const myAge = 21;

// const age2 = (myAge >= 18) && "nonMinor"; // (login && showWindow)
// console.log(age2);

// truthy
// 'sadsafsdfsaf'
// number not 0
// true
// any object {}
// array []

// falsy
// ''
// 0
// false
// null
// undefinded
// NaN

// const test = "" && "success";
// const test = "step" && "success" && "progress";
// console.log(test);

// this
// "use strict";
// const c = 0;
// const person = {
//   name: "Jinky Manny",
//   talk() {
//     console.log(this);
//   },
// };

// // console.log(person);
// //person.talk();

// const myTalk = person.talk.bind(person);
// myTalk();

// const person = {
//   name: "Jinky Manny",
//   talk() {
//     var self = this;
//     setTimeout(function () {
//       console.log(self);
//     }, 5000);
//   },
// };
// "use strict";
// const person = {
//   name: "Jinky Manny",
//   talk() {
//     setTimeout(
//       () => {
//         console.log(this);
//       },
//       //   function () {
//       //     console.log(this);
//       //   },
//       5000
//     );
//   },
// };

// person.talk();

// array
// const tags = ["tag1", "tag2", "tag3", "tag23"];

// const updateTags = tags.filter((tag) => tag.includes("2"));

// const tags = [
//   { id: 1, name: "tag1", desc: "tag1" },
//   { id: 2, name: "tag2", desc: "tag2" },
//   { id: 3, name: "tag3", desc: "tag3" },
// ];

// // function deleteTagById(id) {
// //   return tags.filter((tag) => tag.id !== id);
// // }
// const deleteTagById = (id) => tags.filter((tag) => tag.id !== id);

// // const updateTags = tags.filter((tag) => tag.name === "tag2");
// const updateTags = deleteTagById(2);

// const tags = ["tag1", "tag2", "tag3", "tag23"];

// const updateTags = tags.map((tag, index) => {
//   return index % 2 === 0 ? `<li>${tag}</li>` : "black";
// });
// console.log(updateTags);
// console.log(tags);

// destructuring
const address = {
  street: "Mabuhay",
  city: "Pasig",
  region: "NCR",
};

// console.log(address.street);
// console.log(address.region);
// console.log(address.city);

// const { city: myNamedCity, region } = address;

// console.log(myNamedCity);

// function normalFunction(parameter1) {
//   console.log(parameter1);
// }

// const arrowFunction = (parameter1) => console.log("arrowfn " + parameter1);

// arrowFunction(2);

// function logAddress({ city, region: rgn, street }) {
//   console.log(`My region: ${rgn}`);
//   console.log(`My city: ${city}`);
//   console.log(`My street: ${street}`);
// }

// logAddress(address);

// spread operator
// const group1 = [1, 2, 3];
// const group2 = [7, 8, 9];
// const group3 = [11, 15, 17];

// const combi = group1.concat(group2).concat(group3);
// const combi = [...group1, 4, 5, 6, ...group2, 100, ...group3];
// console.log(combi);

// const clone = group2;
// const clone = [...group2];
// group2[1] = "invalid";

// console.log(clone);

const person = {
  id: 1,
  name: "Jake Jose",
  age: 25,
  address: "Mabuhay",
};

const { id, ...nonIds } = person;

console.log(nonIds);
