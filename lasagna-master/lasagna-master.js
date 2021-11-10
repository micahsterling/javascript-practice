export function cookingStatus(remainingTime) {
  console.log(remainingTime)
  if (remainingTime > 0) {
      return 'Not done, please wait.'
    } 
    if (remainingTime === 0) {
      return 'Lasagna is done.'
    } else {
    return 'You forgot to set the timer.'
  }
}