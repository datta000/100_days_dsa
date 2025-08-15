/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    // Step 1: Trim leading/trailing spaces and split by one or more spaces
    let words = s.trim().split(/\s+/);

    // Step 2: Reverse the array
    words.reverse();

    // Step 3: Join with a single space
    return words.join(' ');
};
