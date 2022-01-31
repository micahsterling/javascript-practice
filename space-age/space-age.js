//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) => {
  console.log(planet,seconds);
  let year;
  switch (planet) {
    case "mercury":
      year = 7600608;
      break;
    case "earth":
      year = 31557600
  }
  let age = seconds / year
  console.log("age", Math.round(age * 100) / 100)
  return Math.round(age * 100) / 100
};
