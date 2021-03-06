// @ts-check

// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Build a sign that includes both of the parameters.
 *
 * @param {string} occasion
 * @param {string} name
 *
 * @returns {string} template string combining both parameters
 */

 export function buildSign(occasion, name) {
  let sign = `Happy ${occasion} ${name}!`;
  return sign
}

/**
 * Build a birthday sign that conditionally formats the return string.
 *
 * @param {number} age
 *
 * @returns {string} template string based on age
 */

 export function buildBirthdaySign(age) {
  let blank = "young" 
  if (age >= 50) {
    blank = "mature"
  } 
  return `Happy Birthday! What a ${blank} fellow you are.`
}

/**
 * Build a graduation sign that includes multiple lines.
 *
 * @param {string} name
 * @param {number} year
 *
 * @returns {string} multi-line template string
 */

export function graduationFor(name, year) {
  let graduation = `Congratulations ${name}!
  Class of ${year}`
    return graduation;
}

/**
 * Determine cost based on each character of sign parameter that builds
 * the template string that includes the currency parameter.
 *
 * @param {string} sign
 * @param {string} currency
 *
 * @returns {string} cost to create the sign
 */

export function costOf(sign, currency) {
  let amount = sign.length * 2 + 20
  return `Your sign costs ${amount.toFixed(2)} ${currency}.`;
}
