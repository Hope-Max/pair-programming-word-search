const { transpose } = require('./matrix_transposition');
const { letterInDiagonal } = require('./letterInDiagonal');

const wordSearch = (letters, word) => {
    if (letters.length === 0) return false;

    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    const diagonalJoin = letterInDiagonal(letters).join('').split();
    const horizontalReverseJoin = letters.map(ls => ls.reverse().join(''));
    const verticalReverseJoin = transpose(letters).map(ls => ls.reverse().join(''));
    const joins = {
        horizontalJoin,
        verticalJoin,
        diagonalJoin,
        horizontalReverseJoin,
        verticalReverseJoin
    };

    for (let join of Object.keys(joins)) {
        for (let l of joins[join]) {
            if (l.includes(word)) return true;
        }
    }

    // const horizontalJoin = letters.map(ls => ls.join(''));
    // for (let l of horizontalJoin) {
    //     if (l.includes(word)) return true;
    // }
    // const verticalJoin = transpose(letters).map(ls => ls.join(''));
    // for (let l of verticalJoin) {
    //     if (l.includes(word)) return true;
    // }
    // const diagonalJoin = letterInDiagonal(letters).join('');
    // if (word === diagonalJoin) return true;

    // const horizontalReverseJoin = letters.map(ls => ls.reverse().join(''));
    // for (let l of horizontalReverseJoin) {
    //     if (l.includes(word)) return true;
    // }

    // const verticalReverseJoin = transpose(letters).map(ls => ls.reverse().join(''));
    // for (let l of verticalReverseJoin) {
    //     if (l.includes(word)) return true;
    // }

    return false;
};
module.exports = wordSearch;