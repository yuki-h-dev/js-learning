// let and const review

const { use } = require("react");

let food = "apple";
console.log(food);

// let can be reassigned
food = "banana";
console.log(food);

const sport = "soccer";
console.log(sport);

// const can't be reassigned
sport = "baseball";
console.log(sport);

// Objects defined with const can have their properties changed
const user = {
  name: "Yuki",
  age: 30,
};
console.log(user);

user.age = 35;
user.address = "Australia";
console.log(user);

// Arrays defined with const can have their properties changed
const animals = ["dog", "cat"];
console.log(animals);

animals[0] = "bird";
animals.push("koala");
console.log(animals);
