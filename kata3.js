const numberOfVowels = function(data) {
  let result = 0;
  for(let i = 0; i < data.length; i++) {
    if (data[i] === "a"|| data[i] === "e" || data[i] === "i" || data[i] === "o" || data[i] === "u") {
            result += 1;
    }
  }
  return result;
}
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

/* option 2
let vowels = ["a", "e", "i", "o", "u"];
for(let i = 0; i <data.length; i++) {
  for(let x = 0; x < vowels.length; x++){
    if (data[i] === vowels[x]){
      result += 1;
    }
  }
}
return result;
}
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));*/