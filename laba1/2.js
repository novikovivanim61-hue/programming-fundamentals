'use strict';

const a = 10;
const b = inc(a);

function inc(n) {
    return ++n;
}

console.dir({ a, b });
