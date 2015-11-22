'use strict';

// normal js

var shoppingList = [];
shoppingList.push('apple');
shoppingList.push('oil');
shoppingList.push('bread');
shoppingList.push('bread');

for (var i = 0;i<shoppingList.length;i++) {
    console.log(shoppingList[i]);
};

// es2015

var shoppingList = new Set();
    // use sets to avoid duplicate values
    // use weakmaps when entries are object - saves memory - only accessible method .has()
shoppingList.add('apple');
shoppingList.add('oil');
shoppingList.add('bread');
shoppingList.add('bread');

for(let item of shoppingList) {
    console.log(shoppingList.size);
    console.log(shoppingList.has(item));
    console.log(item);
    shoppingList.delete(item);
    console.log(shoppingList.has(item));
};


