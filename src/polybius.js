// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
function generateSquare(){
    const squareCoor = [
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', 'A', 'F', 'L', 'Q', 'V'],
      [' ', 'B', 'G', 'M', 'R', 'W'],
      [' ', 'C', 'H', 'N', 'S', 'X'],
      [' ', 'D', '(I/J)', 'O', 'T', 'Y'],
      [' ', 'E', 'K', 'P', 'U', 'Z']
    ];
    return squareCoor;
  } 
  function polybius(input, encode = true) {
    // your solution code here
    const polyTable = generateSquare(); 
    const spacedInput = input.split(' ');
    let message = "";
    if (!encode){
      for(let i = 0; i < spacedInput.length; i++) {
        if (spacedInput[i].length % 2)
          return false;
      }
    }
    if (encode) {
      for(let i = 0; i < input.length; i++){
        if (input[i] === ' '){
          message += ' ';
          continue;
        }
        if (input[i].toLowerCase() === 'i' || input[i].toLowerCase() === 'j') {
          message += '42';
          continue;
        }
        polyTable.forEach((row, indexR) => {
          row.forEach((col, indexC) => {
            if (col.toLowerCase() === input[i].toLowerCase()){
              message += indexR.toString();
              message += indexC.toString();
            }
          })
        })
      }
      return message.toLowerCase();
    }
    spacedInput.forEach((input, index) => {
      for(let i = 0; i < input.length; i = i + 2){
        message += polyTable[input[i]][input[i+1]];
      }
      if (index !== spacedInput.length -1)
        message += ' '
    });
    return message.toLowerCase();
    
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
