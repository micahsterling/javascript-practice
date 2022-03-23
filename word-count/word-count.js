//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (phrase) => {
  phrase = phrase.replace(/[&\/\\#+()$~%.":*?<>{}!@^]/g, '');
  let words = {}
  let split = phrase.toLowerCase().split(/[\s,]+/)
  for (let i = 0; i < split.length; i++) {
    if (split[i] == '') {
      console.log("skip")
    } else if (words.hasOwnProperty(split[i])) {
      words[split[i]] += 1
    } else {
      words[split[i].replace(/'([^']+(?='))'/g, '$1')] = 1
    }
  }
  return words
};

