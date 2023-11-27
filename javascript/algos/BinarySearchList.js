/** @description Search an array for a given integer using divide and conquer strategy
 * @param {Int32Array} haystack[]
 * @param {Int32} needle
 * @example BinarySearchList([24,1,54,765,32,456,87,5,67,34, 321], 34)
 * @returns Boolean
 */

export default BinarySearchList = (haystack, needle) => {
  // We need to sort the array beforehand
  haystack.sort((a, b) => a - b);
  // initialize the low and high so we know where to start search
  let low = 0;
  let high = haystack.length;

  // Perform the following until our lowest position meets our high meaning we've checked the entire array
  do {
    // access the middle index
    const middleIndex = Math.floor(low + (high - low) / 2);
    // access the value of that index
    const currentValue = haystack[middleIndex];

    if (currentValue === needle) {
      return true;
    } else if (currentValue > needle) {
      // If our value is greater than the needle we need to set our new high to the middleIndex
      high = middleIndex;
    } else {
      // If not move up one index
      low = middleIndex + 1;
    }
  } while (low < high);
  //   if the needle isn't in the haystack return false
  return false;
};