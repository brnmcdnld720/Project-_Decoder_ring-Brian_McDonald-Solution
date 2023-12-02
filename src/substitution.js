// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet)
      return false;
    if (alphabet.length !== 26)
      return false;
    for (let i = 0; i < alphabet.length; i++) {
      if(alphabet.indexOf(alphabet[i]) !== alphabet.lastIndexOf(alphabet[i]))
        return false;
      }
//############ ^^ ERROR Handling ^^ ############    
      
    const normalAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    let message = "";
    if (encode){
      for (let i = 0; i < input.length; i++) {
        if (input[i] === ' ') {
          message += ' ';
          continue;
        }
        const index = normalAlphabet.indexOf(input[i]);
        message += alphabet[index];
    }
      return message;
    }
    
    for (let i = 0; i < input.length; i++) {
      if (input[i] === ' '){
        message += ' ';
        continue;
      }
      const index = alphabet.indexOf(input[i]);
      message += normalAlphabet[index];
    }
    return message;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
