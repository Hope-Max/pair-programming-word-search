const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present horizontally", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return false if the word matrix is and empty array", function() {
    const result = wordSearch([], 'HELLO');

    assert.isFalse(result);
  });

  it("should return true if the word is present vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'L', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'I', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'G', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'H', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'T', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'H', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'O', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'U', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'S', 'Q', 'U', 'A', 'L'],
      ['S', 'Z', 'O', 'E', 'Q', 'V', 'B', 'L'],
    ], 'LIGHTHOUSE')

    assert.isTrue(result);
  });

  it("should return true if the word is present diagonally", function() {
    const result = wordSearch([
      ['E', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'V', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'E', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'R', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'O', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'N', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'E'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'EVERYONE')

    assert.isTrue(result);
  });

  it("should return true if the word is present horizontal reversely", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['T', 'N', 'E', 'M', 'E', 'V', 'O', 'M'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'MOVEMENT')

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically reversely", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'R', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'E', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'B', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'M', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'E', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'T', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'P', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'E', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'S', 'L'],
    ], 'SEPTEMBER')

    assert.isTrue(result);
  });
});
