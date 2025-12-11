/**
 * Object Shorthand
 */

const { use } = require("react");

// Shorthand Property Names
const name = "Bob";
const age = 40;

// const user = {
//   name: name,
//   age: age,
// };

const user = { name, age };
console.log(user);

// Shorthand Method Names
const person = {
  name: "Tom",
  // greet: function () {
  //   console.log(`Hello, my name is ${this.name}`);
  // },

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};
person.greet();
