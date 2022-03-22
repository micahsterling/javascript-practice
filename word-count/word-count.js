//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = () => {
  console.log(phrase);
  phrase = phrase.replace(/[&\/\\#+()$~%.":*?<>{}!@^]/g, '');
   console.log("new",phrase);
   let words = {}
    let split = phrase.toLowerCase().split(/[\s,]+/)
  console.log(split)
  for (let i = 0; i < split.length; i++) {
  console.log("split",split[i]);
    if (words.hasOwnProperty(split[i])) {
      words[split[i]] += 1
    } else {
      words[split[i]] = 1
    }
    
  }
  console.log(words)
  return words
};
