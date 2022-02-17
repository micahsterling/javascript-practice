//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (string) => {
  let check = new Set()
  console.log(check)
  for (let i = 0; i < string.length; i++) {
    if (check == string[i]) {
    check.add(string[i])
    } else {
      return false 
    }
  }
  console.log(check)
};
