/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    const result = [];

    function isPalindrome(str, left, right) {
        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    function backtrack(start, path) {
        if (start === s.length) {
            result.push([...path]); // Reached the end, save partition
            return;
        }

        for (let end = start; end < s.length; end++) {
            if (isPalindrome(s, start, end)) {
                path.push(s.slice(start, end + 1)); // Choose the palindrome
                backtrack(end + 1, path); // Explore
                path.pop(); // Backtrack
            }
        }
    }

    backtrack(0, []);
    return result;
};
