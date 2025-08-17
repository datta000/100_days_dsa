/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    // Map of Roman symbols to integer values
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        // If current value is less than next value, we subtract
        if (i < s.length - 1 && map[s[i]] < map[s[i + 1]]) {
            total -= map[s[i]];
        } else {
            // Otherwise, we add the value
            total += map[s[i]];
        }
    }

    return total;
};

// Example usage
console.log(romanToInt("III"));   // 3
console.log(romanToInt("IV"));    // 4
console.log(romanToInt("IX"));    // 9
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994
