/**
 One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

 A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

 Write a function which takes a ROT13 encoded string as input and returns a decoded string.

 All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 */

function rot13(str) { // LBH QVQ VG!
  var LOWER = 65;
  var UPPER = 90;
  var SPACE = 32;
  return str.split('')
    .map(function (letter) {
      if(letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) {
        if(letter.charCodeAt() - 13 < 65) {
          return String.fromCharCode(UPPER - (12 - (letter.charCodeAt() - LOWER)));
        }
        return String.fromCharCode(letter.charCodeAt() - 13);
      } else if(letter.charCodeAt() === SPACE) {
        return " ";
      } else {
        return String.fromCharCode(letter.charCodeAt());
      }
    })
    .join('');

}

// Change the inputs below to test
rot13("SERR CVMMN!");
