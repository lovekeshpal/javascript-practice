let ourString = "i am lovekesh pal";
let vowels = "aeiou";
let consonants = "bcdfghjklmnpqrstvwxyz";

for (let i = 0; i < ourString.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (ourString[i] == vowels[j]) {
      console.log(vowels[j]);
    }
  }
}

for (let i = 0; i < ourString.length; i++) {
  for (let k = 0; k < consonants.length; k++) {
    if (ourString[i] == consonants[k]) {
      console.log(consonants[k]);
    }
  }
}
