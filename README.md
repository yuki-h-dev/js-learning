# JavaScript Learning

A repository for reviewing JavaScript.

## Leaning Goals

- Improve my understanding of JavaScript
- Get used to managing my history on GitHub
- Make it a habit to produce small outputs every day

## Folder structure

```
js-learning/
├── array/
│   ├── filter.js
│   ├── map.js
│   ├── reduce.js
├── basics/
│   ├── destructuring.js
│   ├── functions.js
│   ├── object-shorthand.js
│   ├── spread-vs-rest.js
│   ├── variables.js
│   ├──
```

## Log

### Day 1

#### Review of difference between let and const

- let:
  - Reassignment is allowed
- const:
  - No reassignment
  - No reassignment of the object itself, but properties of the object are mutable
- let and const have block scope
- In React, we basically use const

Coding: basics/variable.js

### Day 2

#### Review of arrow function

- arrow function:
  - Single argument arrow functions allow for parenthesis omission
  - For single line arrow functions, the curly braces and return statement can be omitted for implicit return
  - Arrow functions do not bind "this"
- In React, we basically use arrow function

Coding: basics/function.js

### Day 3

#### Review of destructuring assignment

- Object:
  - Object destructuring uses {}
  - A property name can be assigned to a variable with a different name than the object property
  - Default values can be set
- Array:
  - Array destructuring uses []
  - Default values can be set
- In React(props and state), we basically use destructuring

Coding: basics/destructuring.js

### Day 4

#### Review of Object Shorthand

- Property Value Shorthand
- Method Definition Shorthand

Coding: basics/objectShorthand.js

### Day 5

#### Review of spread syntax and rest syntax

- Expanding, copying and Merging
- Gathers multiple elements or properties a single array or object
- In React, we don't rewrite objects directly, so the basic principle is to "create new values" using spread syntax

Coding: basics/spread-vs-rest.js

#### Review of the map() method of Array

- Immutability: It always returns a new array, leaving the original array untouched
- In React, the map method is essential for UI generation

Coding: array/map.js

#### Review of the filter() method of Array

- Immutability: It always returns a new array, leaving the original array untouched
- Creates a new array containing only the elements from the original array that satisfy a specific condition

Coding: array/filter.js

#### Review of the reduce() method of Array

- Executes a reducer function on each element of the array, resulting in a single output value

Coding: array/reduce.js
