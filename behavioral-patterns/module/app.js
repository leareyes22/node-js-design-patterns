const counter = require("./module");

counter.increment();
counter.increment();

console.log(counter.get()); // 2

counter.decrement();

console.log(counter.get()); // 1
