# JavaScript Learning

A repository for reviewing JavaScript.

## Leaning Goals

- Improve my understanding of JavaScript
- Get used to managing my history on GitHub
- Make it a habit to produce small outputs every day

## Folder structure

```
js-learning/
├── basics/
│   ├── destructuring.js
│   ├── functions.js
│   ├── objectShorthand.js
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
