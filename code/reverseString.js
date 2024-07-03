function reverseString(str) {
  // Checking whether str is null or undefined, if yes, return ""
  if (str == null || str == undefined) {
    return "";
  }

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
