/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {

    for (let i = 0; i < nums.length; i++) {
        let min = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[min] > nums[j]) {
                min = j
            }
        }
        [nums[i], nums[min]] = [nums[min], nums[i]]
    }
};