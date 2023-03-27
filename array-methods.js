//Array Methods in JavaScript

//1. Map

let vagetables = ['🍆', '🍅', '🥦', '🥕'];

let vegetableWithPotato = vagetables.map((val) => {
  return '🥔' + val
});

console.log(vegetableWithPotato); //[ '🥔🍆', '🥔🍅', '🥔🥦', '🥔🥕' ]

//2. Filter 

let ages = [32, 33, 16, 40];
let adults = ages.filter((age)=>{
   return age>=18
});
console.log(adults); //[ 32, 33, 40 ]

//Remember: Filter never changes the original array
