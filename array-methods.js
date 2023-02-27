//Array Methods in JavaScript

//1. Map

let vagetables = ['🍆', '🍅', '🥦', '🥕'];

let vegetableWithPotato = vagetables.map((val) => {
  return '🥔' + val
});

console.log(vegetableWithPotato); //[ '🥔🍆', '🥔🍅', '🥔🥦', '🥔🥕' ]
