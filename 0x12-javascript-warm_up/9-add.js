#!/usr/bin/node

function add(a, b) {
    return a + b;
}

const [_, __, arg1, arg2] = process.argv;
const num1 = parseInt(arg1);
const num2 = parseInt(arg2);

if (isNaN(num1) || isNaN(num2)) {
    console.log("Please provide valid integer arguments.");
} else {
    const result = add(num1, num2);
    console.log(`The sum of ${num1} and ${num2} is ${result}.`);
}

