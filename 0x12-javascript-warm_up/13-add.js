#!/usr/bin/node

function add(a, b) {
    return a + b;
}

module.exports = add; // Make the function visible from outside

// Example usage:
// const result = add(5, 3);
// console.log(result); // Prints 8

