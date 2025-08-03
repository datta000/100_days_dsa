/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    let numbers = [];
    let factorial = 1;

    // Step 1: Prepare the numbers list and calculate (n)!
    for (let i = 1; i <= n; i++) {
        numbers.push(i);
        factorial *= i;
    }

    k--; // convert to 0-based index
    let result = "";

    // Step 2: Build result using math
    for (let i = 0; i < n; i++) {
        factorial = factorial / (n - i);
        let index = Math.floor(k / factorial);
        result += numbers[index];
        numbers.splice(index, 1);
        k = k % factorial;
    }

    return result;
};
