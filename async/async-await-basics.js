/**
 * async/await, Promise, fetch
 */

// Promise
const wait = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Waited ${ms}ms`), ms);
  });
};

wait(2000)
  .then((msg) => console.log(msg))
  .finally(() => console.log("End processing"));

// async/await
async function asyncExample() {
  const result = await wait(3000);
  console.log("Async result:", result);
}

asyncExample();

// Execute multiple asynchronous processes in sequence
async function sequentialAsync() {
  const first = await wait(500);
  console.log(first);
  const second = await wait(500);
  console.log(second);
}

sequentialAsync();

// Execute multiple asynchronous processes simultaneously
async function parallelAsync() {
  const promises = [wait(500), wait(1000), wait(2000)];
  const results = await Promise.all(promises);
  console.log("Parallel results:", results);
}

parallelAsync();

// Error Handling
async function errorExample() {
  try {
    const result = await Promise.reject("Something went wrong!");
    console.log(result);
  } catch (err) {
    console.error("Caught error:", err);
  }
}

errorExample();

// fetch
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error("Failed to get data:", err);
  }
}

fetchData();
