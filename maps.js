'use strict';

// normal js

var unit1_1 = {name: 'Warrior', atk: 30, def: 20};
var unit1_2 = {name: 'Archer', atk: 20, def: 10};
var unit1_3 = {name: 'Monk', atk: 10, def: 5};

var isAlive1 = {};
isAlive1[unit1_1] = false;
isAlive1[unit1_2] = false;
isAlive1[unit1_3] = true;

for(var i in isAlive1) {
    console.log(i);
    console.log(isAlive1[i]);
}

// es2015

let unit2_1 = {name: 'Warrior', atk: 30, def: 20};
let unit2_2 = {name: 'Archer', atk: 20, def: 10};
let unit2_3 = {name: 'Monk', atk: 10, def: 5};

let isAlive2 = new Map();
    // use maps when values are unknown until runtime
    // use weakmaps when keys are object - saves memory
isAlive2.set(unit2_1, false);
isAlive2.set(unit2_2, false);
isAlive2.set(unit2_3, true);

for(let unitAlive of isAlive2) {
    console.log(unitAlive[0]);
    console.log(isAlive2.has(unitAlive[0]));
    console.log(isAlive2.get(unitAlive[0]));
    console.log(isAlive2.delete(unitAlive[0]));
}
