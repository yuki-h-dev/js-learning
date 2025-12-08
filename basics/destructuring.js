/**
 * Destructuring assignment
 */

// Object

const person = {
  name: "Taro",
  age: 25,
};

const message1 = `My name is ${person.name}. I'm ${person.age} years old.`;
console.log(message1);

const { name, age } = person;
const message2 = `My name is ${name}. I'm ${age} years old.`;
console.log(message2);

// Array

const person2 = ["Sara", 22];

const message3 = `My name is ${person2[0]}. I'm ${person2[1]} years old.`;
console.log(message3);

const [name2, age2] = person2;

const message4 = `My name is ${name2}. I'm ${age2} years old.`;
console.log(message4);

// Default value
const person3 = {
  age: 40,
};
const { name3 = "Guest", age: age3 } = person3;
console.log(name3, age3);

const person4 = ["Takuya", "Tomomi"];
const [player1, player2, player3 = "Guest"] = person4;
console.log(player1, player2, player3);
