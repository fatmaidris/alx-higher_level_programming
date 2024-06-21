#!/usr/bin/node

const [_, __, firstArg] = process.argv;

if (firstArg === undefined) {
    console.log("No argument");
} else {
    console.log(firstArg);
}

