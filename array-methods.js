//Array Methods in JavaScript

//1. map()

let vagetables = ['🍆', '🍅', '🥦', '🥕'];

let vegetableWithPotato = vagetables.map((val) => {
  return '🥔' + val
});

console.log(vegetableWithPotato); //[ '🥔🍆', '🥔🍅', '🥔🥦', '🥔🥕' ]

//2. filter() 

let ages = [32, 33, 16, 40];
let adults = ages.filter((age)=>{
   return age>=18
});
console.log(adults); //[ 32, 33, 40 ]

//Remember: Filter never changes the original array

//3. reduce()

let prices = [3,23,45,76,72,31]; 

let total = prices.reduce((acc, price)=> {
  return acc + price; 
})

console.log(total); //250

//here acc is accumulater. 
//Remember: reduce() never changes the original array
