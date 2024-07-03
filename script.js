export function reverseString(str) {
  // Splitting up all of the characters of the string into elements of an array
  let allLetters = str.split("");

  let allLettersReverse = [];

  // Looping over allLetters and pushing them to allLettersReversed in reversed order
  for (let i = allLetters.length - 1; i > -1; i--) {
    allLettersReverse.push(allLetters[i]);
  }

  // Joining all of the elements of the array to make it a string
  return allLettersReverse.join("");
}

export const calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  divide(x, y) {
    return x / y;
  },

  multiply(x, y) {
    return x * y;
  },
};

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

export function analyzeArray(arr) {
  let totalSum = 0;

  // Looping over arr and adding each num to totalSum
  for (const num of arr) {
    totalSum += num;
  }

  // Dividing totalSum by arr.length to get its average
  const average = totalSum / arr.length;

  // Getting the lowest value in the array using Math.min()
  const min = Math.min(...arr);

  // Getting the highest value in the array using Math.max()
  const max = Math.max(...arr);

  // Getting the length of the array using array.length
  const length = arr.length;

  return {
    average,
    min,
    max,
    length,
  };
}
