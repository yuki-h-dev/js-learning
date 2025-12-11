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
├── async/
│   ├── async-await-basics.js
├── basics/
│   ├── conditional-operator.js
│   ├── destructuring.js
│   ├── functions.js
│   ├── nullish-coalescing.js
│   ├── object-shorthand.js
│   ├── optional-chaining.js
│   ├── spread-vs-rest.js
│   ├── variables.js
├── es-modules/
│   ├── app.js
│   ├── math-utils.js
│   ├── message.js
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

### Day 6

#### Review of conditional operator

- The conditional operator is concise way to write an if-else statement in a single line

Coding: basics/conditional-operator.js

#### Review of nullish coalescing

- To provide a default value for null or undefined inputs, without treating  
  other "falsy" values like 0, "", or false as needing a default

Coding: basics/nullish-coalescing.js

#### Review of optional chaining

- Safely access properties and methods of objects that might be null or undefined without error

Coding: basics/optional-chaining.js

#### Review of async/await, Promise and fetch

- Promise:
  - An object that promises a result at some point in the future(like a container for values sent in an asynchronous process)
  - Manage pending, fulfilled(resolved) and rejected states
- Async/Await:
  - A modern JavaScript syntax that makes asynchronous code look and behave more like synchronous code
  - async: Placed before a function declaration to indicate that the function will return a Promise,  
    and allows the use of await inside it
  - await: Pauses the execution of the async function until the Promise it's waiting on resolves or rejects
- fetch:
  - A modern way to make HTTP requests (like GET, POST) to get data from web servers or APIs
  - Two-step process:
    1. Returns a Promise that resolves to a Response object immediately after HTTP headers are received (even for 404/500 errors)
    2. Call a method like response.json() (which returns another Promise) to read the response body

Coding: async/async-await-basics.js

#### Review of ES Modules(export/import)

- export: A keyword used to make functions, objects, or variables available for use in other files (modules)
- import: A keyword used to bring exported features from another module into the current file
- In React, everything is a component/module

Coding: es-modules/math-utils.js, es-modules/message.js, es-modules/app.js,
