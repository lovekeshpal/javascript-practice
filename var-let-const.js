//Demonstration of global scope of var
function sumUsingVar(){
  for(var i = 0; i<5; i++){
    console.log(i);// 0 1 2 3 4
  }
  console.log(i); //5
}
sumUsingVar(); // 0 1 2 3 4 5 


//Demonstration of block scope of let
function sumUsingLet(){
  for(let i = 0; i<5; i++){
    console.log(i);// 0 1 2 3 4
  }
  console.log(i); // error
}

sumUsingLet();

// ReferenceError: - i is not defined.
//Since i is declared with let keyword.
//keywords declared with let keyword are block scoped.
//If we use var keyword than no error will be there.
