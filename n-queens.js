/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    const res = [];

    // Track which columns and diagonals are occupied
    const cols = new Set();
    const posDiag = new Set(); // row + col
    const negDiag = new Set(); // row - col

    const board = Array.from({ length: n }, () => Array(n).fill('.'));

    function backtrack(row) {
        if (row === n) {
            // Convert board to string format
            res.push(board.map(r => r.join("")));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (cols.has(col) || posDiag.has(row + col) || negDiag.has(row - col)) {
                continue; // Queen attacked
            }

            // Place the queen
            board[row][col] = 'Q';
            cols.add(col);
            posDiag.add(row + col);
            negDiag.add(row - col);

            // Move to next row
            backtrack(row + 1);

            // Backtrack: remove queen
            board[row][col] = '.';
            cols.delete(col);
            posDiag.delete(row + col);
            negDiag.delete(row - col);
        }
    }

    backtrack(0);
    return res;
};
