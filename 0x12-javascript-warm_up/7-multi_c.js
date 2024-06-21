#!/usr/bin/node

const [_, __, arg] = process.argv;
const numOccurrences = parseInt(arg);

if (isNaN(numOccurrences)) {
    console.log("Missing number of occurrences");
} else {
    for (let i = 0; i < numOccurrences; i++) {
        console.log("C is fun");
    }
}

