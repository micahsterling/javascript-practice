//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (target,list) => {
  console.log(target,list)
  let set = new Set(target) 
  let output = []
  for (let i=0;i<list.length;i++) {
  let check = new Set()
    console.log("list 1",list[i])
    if (list[i] === target) {
      check.add(false)
    }
    for (let j=0;j<list[i].length;j++) {
       // console.log("list 2",list[i][j])
      if (set.has(list[i][j])) {
        // console.log("true")
        check.add(true)
      } else {
        // console.log("false")
        check.add(false)
      } 
    }
  console.log("output",output)
    if (check.has(false)) {
      
    } else {
        output.push(list[i])
        console.log("output 1",output)
    }
    console.log("check",check)
  }
};

