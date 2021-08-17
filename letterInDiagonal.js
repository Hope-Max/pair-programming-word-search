const letterInDiagonal = function(matrix) {
  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (j === i) {
        result.push(matrix[i][j]);
      }
    }
  }

  return result;
};

module.exports = { letterInDiagonal };