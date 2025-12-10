/**
 * map
 */

const numbers = [1, 2, 3, 4, 5];

// for
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// map
numbers.map((num) => console.log(num));

const numbers2 = numbers.map((num) => num);
console.log(numbers2);

const doubled = numbers.map((num) => num * 2);
console.log(numbers, doubled);
