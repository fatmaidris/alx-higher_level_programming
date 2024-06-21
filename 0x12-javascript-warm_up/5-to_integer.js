#!/usr/bin/node

const [_, __, firstArg] = process.argv;
const parsedInt = parseInt(firstArg);

if (!isNaN(parsedInt)) {
    console.log(`My number: ${parsedInt}`);
} else {
    console.log("Not a number");
}

