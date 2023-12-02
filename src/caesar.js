// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  
  
  function charactersToNumbers(characters) {
    return characters.map((character) => character.charCodeAt())
  }
  
  function NumbersToCharacters(number) {
    return number.map((number) => String.fromCharCode(number))
  }
  
  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!input || !shift) 
      return false;
    if (shift > 25 || shift < -25 || shift == 0)
      return false;
    const inputCharacters = input.toLowerCase().split("");
    const inputInitialNumbers = charactersToNumbers(inputCharacters);
    let shiftNumbers = [];
    if (encode) {    
      shiftNumbers = inputInitialNumbers.map((number) => {
          if (number < 97 || number > 122) return number;

          return number + shift});
    }
    else {
      shiftNumbers = inputInitialNumbers.map((number) => {
        if (number < 97 || number > 122) return number;

        return number - shift});
    }
    
    shiftNumbers = shiftNumbers.map((number) => {
      if (number > 122 && number !== 32 && number !== 46) {
        return number - 26;
      }
      else if (number < 97 && number !== 32 && number !== 46) {
        return number + 26;
      }
      
      return number;
    });
    const output = NumbersToCharacters(shiftNumbers).join("")
    
    return output;
  }
  

  return {
    caesar
  };
})();

module.exports = { caesar: caesarModule.caesar };
