/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let n = intervals.length;
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < n - 1; i++) {
        if (intervals[i][1] >= intervals[i + 1][0]) {
            intervals[i][1] = Math.max(intervals[i + 1][1], intervals[i][1])
            intervals.splice(i + 1, 1)
            n = intervals.length
            i--;
        }
    }
    return intervals;
};