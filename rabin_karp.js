/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function (a, b) {
    let str = "";
    let n = Math.ceil(b.length / a.length);
    str = a.repeat(n);
    if (str.includes(b)) {return n;}
    str += a;
    if (str.includes(b)) return n + 1;
    return -1;
};