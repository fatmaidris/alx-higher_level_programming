#!/usr/bin/node

function factorial(n) {
    if (isNaN(n)) {
        return 1; // Factorial of NaN is 1
    }
    if (n === 0 || n === 1) {
        return 1; // Base case: 0! and 1! are both 1
    }
    return n * factorial(n - 1); // Recursive case
}

const [_, __, arg] = process.argv;
const num = parseInt(arg);

console.log(`Factorial of ${num} is ${factorial(num)}.`);

