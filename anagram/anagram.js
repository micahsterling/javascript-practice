//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (target,list) => {
  let set = new Set(target.toLowerCase()) 
  let output = []
  for (let i=0;i<list.length;i++) {
  let objH = {}
  let check = new Set()
    if (list[i].toLowerCase() === target.toLowerCase()) {
      check.add(false)
    }
      let count = 0
    for (let j=0;j<list[i].length;j++) {
      if (set.has(list[i][j].toLowerCase())) {
        check.add(true)
        count += 1
        if (objH.hasOwnProperty(list[i][j])) {
          objH[list[i][j].toLowerCase()] += 1
        } else {
          objH[list[i][j].toLowerCase()] = 1
        }
      } else {
        check.add(false)
      } 
    }
    let objT = {};
    [...target].forEach(char => {
      if (objT.hasOwnProperty(char)) {
          objT[char.toLowerCase()] += 1
        } else {
          objT[char.toLowerCase()] = 1
        }
    })
const isEqual = (objT,objH) => {
  const objTKeys = Object.keys(objT);
  const objHKeys = Object.keys(objH);
  if (objTKeys.length !== objHKeys.length) {
    check.add(false);
    return false
  }
  for (let objKey of objTKeys) {
    if (objT[objKey] !== objH[objKey]) {
      check.add(false); 
      return false
    }
  }
}
  isEqual(objT,objH)
    if (!check.has(false) && count == target.length) {
        output.push(list[i])
    } 
  }
  return output
};
