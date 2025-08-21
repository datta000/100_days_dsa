/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let result = 0, i = 0, sign = 1;
    s = s.trimStart();
    if (s[0] == '-') {
        sign = -1;
        i = 1;
    }
    else if (s[0] == '+') i = 1;
    for (i; i < s.length; i++) {
        if (s[i] >= '0' && s[i] <= '9') {
            result = (result * 10) + parseInt(s[i]);
        }
        else break;

    }
    result = result * sign

    const INT_MIN = -(2 ** 31);
    const INT_MAX = (2 ** 31) - 1;

    if (result < INT_MIN) result = INT_MIN;
    if (result > INT_MAX) result = INT_MAX;


    return result;
};