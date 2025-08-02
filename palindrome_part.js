/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    const result = [];

    // Helper to check if a string is a palindrome between indices left and right
    function isPalindrome(str, left, right) {
        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    // Backtracking function
    function backtrack(start, path) {
        // If we reach the end of the string, we add the current path to result
        if (start === s.length) {
            result.push([...path]);
            return;
        }

        // Try all possible partitions starting from index `start`
        for (let end = start; end < s.length; end++) {
            if (isPalindrome(s, start, end)) {
                path.push(s.slice(start, end + 1)); // Choose
                backtrack(end + 1, path);           // Explore
                path.pop();                         // Backtrack
            }
        }
    }

    backtrack(0, []);
    return result;
};
