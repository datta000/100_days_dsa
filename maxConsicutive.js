/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let maxCount = 0, count = 0;
    for (let num of nums) {
        if (num === 1) {
            count++;
            maxCount = Math.max(maxCount, count);
        } else {
            count = 0;
        }
    }
    return maxCount;
};
