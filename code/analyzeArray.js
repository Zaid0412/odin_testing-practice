export function analyzeArray(array) {
  // Looping over the elements of the array and summing them all up, then dividing the sum by array.length
  const average = array.reduce((num, acc) => num + acc, 0) / array.length;

  // Getting the lowest value in the array
  const min = Math.min(...array);

  // Getting the highest value in the array
  const max = Math.max(...array);

  // Getting the length if the array
  const length = array.length;

  // Returning average, min, max and length as properties of an object
  return {
    average,
    min,
    max,
    length,
  };
}
