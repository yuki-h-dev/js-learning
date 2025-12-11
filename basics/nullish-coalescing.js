/**
 * Nullish coalescing
 */

// Nullish: null, undefined

// undefined
let name = undefined;
let user = name ?? "guest";
console.log(user); // "guest"

// 0
let count = 0;
let safeCount = count ?? 10;
console.log(safeCount); // 0

// Comparison with the || operator
let score = 0;
let result1 = score || 100;
let result2 = score ?? 100;
console.log(result1); // 100
console.log(result2); // 0
