'use strict';

// normal js

for(var i=0;i<10;i++) {
    setTimeout((function() {
        console.log(i);
    })(i),i * 500);
}

// es2015

for(let i=0;i<10;i++) {
    setTimeout(function() {
        console.log(i);
    },i * 500);
}
