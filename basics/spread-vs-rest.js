/**
 * Spread syntax(...)
 * Rest syntax(...)
 */

// Expand an array
const arr1 = [1, 2];
// console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

// Array copying and merging
const arr2 = [1, 2, 3];
const arr3 = [4, 5];

const copyArr2 = [...arr2];
console.log(copyArr2);

copyArr2[0] = 0;
console.log(arr2, copyArr2);

const arr4 = [...arr2, ...arr3];
console.log(arr4);

// Collects the remaining elements into an array
const arr5 = [6, 7, 8, 9, 10];
const [num1, num2, ...arr6] = arr5;
console.log(num1);
console.log(num2);
console.log(arr6);
