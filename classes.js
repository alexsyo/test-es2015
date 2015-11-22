'use strict';

class abc {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    setA(val) {
        this.a = val;
    }

    setB(val) {
        this.b = val;
    }

    setC(val) {
        this.c = val;
    }

    get(prop) {
        return this[prop];
    }
}

let obj = new abc(3, 5, 6);
obj.setC(obj.get('a') + obj.get('b'));

console.log(obj.get('c'));
