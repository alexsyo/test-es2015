'use strict';

// normal js

var names1 = ['Gino', 'Chiara', 'Mauro'];

for(var i=0;i<names1.length;i++) {
    console.log(names1[i]);
}

var units1 = [
    {name: 'Warrior', attack: 10, defence: 20},
    {name: 'Archer', attack: 15, defence: 5},
    {name: 'Monk', attack: 5, defence: 5}
];

for(var i=0;i<units1.length;i++) {
    if(units1[i].name === 'Monk') {
        var monk1 = units1[i];
        break;
    } 
}    

console.log(units1[i]);

// es2015

let names2 = ['Gino', 'Chiara', 'Mauro'];

for(let name2 of names2) {
    console.log(name2);
}

let units2 = [
    {name: 'Warrior', attack: 10, defence: 20},
    {name: 'Archer', attack: 15, defence: 5},
    {name: 'Monk', attack: 5, defence: 5}
];

let monk2 = units2.find((unit2) => unit2.name === 'Monk');

console.log(monk2);
