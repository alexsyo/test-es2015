'use strict';

// normal js

var a1 = 123;

var text1 = 'my number is ' + a1 + '\n' +
            'ma age is ' + a1;

console.log(text1);

// es2015

let a2 = 123;

let text2 = `
my number is ${a2}
my age is ${a2}
`;

console.log(text2);
