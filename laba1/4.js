'use strict';


const arr = [true, 'hello', 5, 12, -200, false, false, 'word', 67, 'sixseven', 228, true, false, false, 'true', 'false', 26, 9, "SBR", "Netflix pls chenge outro"];

const hash = {};

function count(arr) {
    for (const key of arr) {
        if (typeof key === 'boolean') {
            hash.boolean = (hash.boolean ?? 0) + 1;
        } else if (typeof key === 'string') {
            hash.string = (hash.string ?? 0) + 1;
        } else if (typeof key === 'number') {
            hash.number = (hash.number ?? 0) + 1;
        }
    }
}

count(arr);
console.dir(hash);