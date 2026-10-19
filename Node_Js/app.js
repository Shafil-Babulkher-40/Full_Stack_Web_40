console.log('1. Synchronous Start');

setTimeout(() => {
  console.log('4. Macrotask: setTimeout callback');
}, 0);

Promise.resolve().then(() => {
  console.log('3. Microtask: Promise callback');
});

console.log('2. Synchronous End');