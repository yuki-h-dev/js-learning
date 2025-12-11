/**
 * import
 */

// import: named export
import { add, subtract, PI } from "./mathUtils.js";

// import: default export
import getMessage from "./message.js";

console.log("Message:", getMessage());

console.log("Add:", add(3, 4));
console.log("Subtract:", subtract(10, 3));
console.log("PI:", PI);
