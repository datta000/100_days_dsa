/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    const result = []
    nums.sort((a, b) => a - b)
    function subset(start, subarr) {
        result.push([...subarr])

        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue;
            subarr.push(nums[i]);
            subset(i + 1, subarr);
            subarr.pop();
        }
    }
    subset(0, [])
    return result
};