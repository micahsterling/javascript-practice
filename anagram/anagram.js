//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word,list) => {
  console.log(word,list)
  let set = new Set(word) 
  let output = []
  list.forEach(letter => {
    console.log("letter",letter)
  });
};
