/**
 * Conditional operator
 */

// condition ? truthy : falsy
const score = 50;
const result = score > 60 ? "Pass" : "Fail";
console.log(result);

const num = 1500;
// const num = "1500";
console.log(num.toLocaleString());

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "Please enter a number";
console.log(formattedNum);
