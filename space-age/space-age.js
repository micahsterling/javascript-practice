//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) => {
  let year;
  switch (planet) {
    case "mercury":
      year = 7600608;
      break;
    case "venus":
      year = 19409760;
      break;
    case "earth":
      year = 31557600;
      break;
    case "mars":
      year = 59356800;
      break;
    case "jupiter":
      year = 374247648;
      break;
    case "saturn":
      year = 929577600;
      break;
    case "uranus":
      year = 2651356800;
      break;
    case "neptune":
      year = 5200416000;
      break;
  }
  let age = seconds / year
  return Math.round(age * 100) / 100
};
