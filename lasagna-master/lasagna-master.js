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

export function quantities (layers) {
  let measurements = {noodles: 0, sauce: 0}
for (let i = 0; i < layers.length; i++) {
  if (layers[i] == 'noodles') {
    measurements.noodles += 50
  }
  if (layers[i] == 'sauce') {
     measurements.sauce += 0.2
  }
} 
    return measurements
}

export function addSecretIngredient (friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1])
}  

export function scaleRecipe (recipe, portions) {
  let mod = Object.assign({}, recipe);
  Object.keys(mod).forEach(key => { mod[key] = mod[key] * portions/2 });
  return mod
}