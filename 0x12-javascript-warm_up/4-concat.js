#!/usr/bin/node

const [_, __, arg1, arg2] = process.argv;

if (arg1 && arg2) {
    console.log(`${arg1} is ${arg2}`);
} else {
    console.log("Please provide two arguments.");
}

