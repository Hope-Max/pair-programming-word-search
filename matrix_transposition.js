const transpose = function(matrix) {
  const numOfRow = matrix.length;
  if (numOfRow === 0) {
    return undefined;
  }
  const numOfCol = matrix[0].length;
  if (numOfCol === 0) {
    return undefined;
  }

  const newMatrix = [];
  let newRow = [];

  for (let i = 0; i < numOfCol; i++) {
    for (let j = 0; j < numOfRow; j++) {
      if (j === i) {
        newRow.push(matrix[i][j]);
      } else {
        newRow.push(matrix[j][i]);
      }
    }
    newMatrix.push(newRow);
    newRow = [];
  }
  return newMatrix;
};

module.exports = { transpose };