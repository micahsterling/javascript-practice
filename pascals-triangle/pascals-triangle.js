//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (numRows) => {
  let result = []
  for (let i=0; i< numRows; i++) {
    let row = [1,1]
    if (i == 0) {
      row = [1]
    }
    if (i == 1) {
    row = [1,1]
    } 
    for (let j=1; j< i; j++) {
      row.splice(j,0,result[i-1][j-1] + result[i-1][j])
    }
  result.push(row)
  }
};

