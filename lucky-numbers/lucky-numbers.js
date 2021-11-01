// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let first = ""
  let second = ""
  for (let i=0; i < array1.length; i++) {
    first += array1[i];
  } 
  for (let i=0; i < array2.length; i++) {
    second += array2[i];
  } 
  return parseInt(first) + parseInt(second)
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let string = value.toString()
  let reverse = ""
    for (let i=string.length -1; i >= 0; i--) {
    reverse += string[i];
  }
  if (string === reverse ) {
    return true
  } else {
    return false
  }
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!input) {
    return "Required field"
  } else {
    const num = Number(input)
    return num ? "" : "Must be a number besides 0" 
  }
}
