export function caesarCipher(str, shift) {
  const alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  // Splitting up all of the characters of the string into elements of an array
  let strLetters = str.split("");

  let shiftedLetterArr = [];

  // Looping over strLetters
  for (const letter of strLetters) {
    // Converting all characters to lower case
    let lowerCaseLetter = letter.toLowerCase();

    let letterIndex = alphabets.indexOf(lowerCaseLetter);
    console.log(letterIndex);

    if (letterIndex != -1) {
      // Getting the index of the shifted character
      for (let i = 0; i < Number(shift); i++) {
        if (letterIndex === 25) {
          letterIndex = 0;
        } else letterIndex++;
      }

      // Checking if original character was upper case or lower case
      // If original character was upper case
      if (letter == letter.toUpperCase()) {
        shiftedLetterArr.push(alphabets[letterIndex].toUpperCase()); // Convert character to upper case and push it to shiftedLetterArray
      } else {
        // If original character was lower case
        shiftedLetterArr.push(alphabets[letterIndex].toLowerCase()); // Push the character to shiftedLetterArray
      }
    }
    // Check if letter is a punctuation
    else if (letterIndex == -1) {
      let puncIndex = strLetters.indexOf(letter);
      shiftedLetterArr.splice(puncIndex, 0, letter);
    }
  }

  // Joining all of the elements of the array to make it a string
  return shiftedLetterArr.join("");
}
