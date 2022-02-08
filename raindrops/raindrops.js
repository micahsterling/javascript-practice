//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (rain) => {
  if (rain % 3 == 0 && rain % 5 == 0 && rain % 7 == 0) {
    return "PlingPlangPlong"
  } else if (rain % 3 == 0 && rain % 5 == 0) {
    return "PlingPlang"
  } else if (rain % 3 == 0 && rain % 7 == 0) {
    return "PlingPlong"
  } else if (rain % 5 == 0 && rain % 7 == 0) {
    return "PlangPlong"
  }
  
  if (rain % 3 == 0) {
    return "Pling"
  } else if (rain % 5 == 0) {
    return "Plang"
  }else if (rain % 7 == 0) {
    return "Plong"
  }else {
    return rain.toString()
  }
};
