/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    let digits = [];
    let factorial = 1;

    // fill digits [1..n] and calculate n!
    for (let i = 1; i <= n; i++) {
        digits.push(i);
        factorial *= i;
    }

    k--; // make 0-indexed
    let result = '';

    for (let i = n; i >= 1; i--) {
        factorial = factorial / i; // (i-1)!
        let index = Math.floor(k / factorial);
        result += digits[index];
        digits.splice(index, 1); // remove used digit
        k %= factorial;
    }

    return result;
};
