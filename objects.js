'use strict';

// normal js

function buildObj1(a,b) {
    return {
        a: a,
        b: b,
        c: function() {
            return 'end';
        }
    };
}

var abc1 = buildObj1(3,4);

console.log(abc1.a);
console.log(abc1.b);
console.log(abc1.c());


// es2015

let buildObj2 = (a, b) => {
    return {
        a, 
        b, 
        c() {
            return 'end';
        }
    };
}

let abc2 = buildObj2(3,4);

console.log(abc2.a);
console.log(abc2.b);
console.log(abc2.c());
