/**
 * arrow function
 */

// Traditional Function Declaration
function add(a, b) {
  return a + b;
}
console.log(add(1, 2));

// Function Expression
const subtract = function (a, b) {
  return a - b;
};
console.log(subtract(5, 3));

// Arrow function
const multiply = (a, b) => a * b;
console.log(multiply(2, 6));
