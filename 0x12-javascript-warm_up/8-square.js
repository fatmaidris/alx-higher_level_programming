#!/usr/bin/node

const [_, __, sizeArg] = process.argv;
const size = parseInt(sizeArg);

if (isNaN(size)) {
    console.log("Missing size");
} else {
    for (let i = 0; i < size; i++) {
        console.log("X".repeat(size));
    }
}

