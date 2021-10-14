// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name){
    case 'Pure Strawberry Joy':
      return 0.5
    case 'Energizer':
      return 1.5
    case 'Green Garden':
      return 1.5
    case 'Tropical Island':
      return 3
    case  'All or Nothing':
      return 5
      // break;
    default:
      return 2.5
  };
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
      console.log(limes)
  while (wedgesNeeded > wedges) {
  let wedges = 0
  let limesCut = 0
    for (let i = 0; wedgesNeeded > wedges; i++) {
      console.log(i)
      switch (limes[i]) {
        case 'small':
          wedges += 6
          limesCut += 1
          console.log("small",wedges)
          break
        case 'medium':
          wedges += 8
          limesCut += 1
          console.log("medium",wedges)
          break
        case 'large':
          wedges +=10
          limesCut += 1
          console.log("large",wedges)
          break
      }
    }
    break
  };
  return limesCut
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  throw new Error('Please implement the remainingOrders function');
}
