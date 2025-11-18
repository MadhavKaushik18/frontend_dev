console.log("Start");

setTimeout(() => {
    console.log("setTimeout: Macrotask executed");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise.then: Microtask executed");
});

console.log("Synchronous log");
console.log("End");
