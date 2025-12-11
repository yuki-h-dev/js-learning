/**
 * Optional chaining
 */

const user = {
  profile: {
    name: "Alice",
    address: null,
  },
};

// No optional chaining
console.log(user.profile.address.city); // TypeError: Cannot read properties of null (reading 'city')

console.log(user.profile.address && user.profile.address.city);

// Optional chaining
console.log(user.profile.address?.city); // undefined

// Optional chaining and nullish-coalescing
console.log(user.profile.address?.city ?? "Unknown"); // "Unknown"
