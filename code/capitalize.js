export function capitalize(str) {
  // Extracting the first letter of the string and converting it to upper case
  let firstLetterUpper = str.substr(0, 1).toUpperCase();

  // Concatenating firstLetterUpper to the beginning of the string and returning it
  return firstLetterUpper.concat(str.slice(1));
}
