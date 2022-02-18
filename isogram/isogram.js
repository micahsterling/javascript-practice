//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (string) => {
  let check = new Set()
  for (let i = 0; i < string.length; i++) {
    if ((/[A-Za-z]/).test(string[i]) && !check.has(string[i].toLowerCase())) {
    check.add(string[i].toLowerCase())
    } else if (check.has(string[i].toLowerCase())) {
      return false
    }
  }
  return true
};