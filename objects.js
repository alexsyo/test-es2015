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
let add2 = {
    a: 999,
    d: 888
};

let abcd2 = Object.assign({}, abc2, add2);

console.log(abcd2.a);
console.log(abcd2.b);
console.log(abcd2.c());
console.log(abcd2.d);
