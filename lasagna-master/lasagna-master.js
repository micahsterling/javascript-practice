export function cookingStatus(remainingTime) {
  if (remainingTime > 0) {
      return 'Not done, please wait.'
    } 
    if (remainingTime === 0) {
      return 'Lasagna is done.'
    } else {
    return 'You forgot to set the timer.'
  }
}

export function preparationTime (layers, averageTime) {
  if (averageTime) {
   return layers.length * averageTime
  } else {
    return layers.length * 2
  }
}