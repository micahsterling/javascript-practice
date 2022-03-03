//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (target,list) => {
  console.log(target,list)
  let set = new Set(target.toLowerCase()) 
  let output = []
  for (let i=0;i<list.length;i++) {
  let check = new Set()
    console.log("list 1",list[i])
    if (list[i].toLowerCase() === target.toLowerCase()) {
      check.add(false)
    }
    let count = 0
    for (let j=0;j<list[i].length;j++) {
       // console.log("list 2",list[i][j])
      if (set.has(list[i][j].toLowerCase())) {
        // console.log("true")
        check.add(true)
        count += 1
      } else {
        // console.log("false")
        check.add(false)
      } 
    }
    if (!check.has(false) && count == target.length) {
      output.push(list[i])
    } 
    console.log("check",check)
    console.log("output",output)
  }
  return output
};

