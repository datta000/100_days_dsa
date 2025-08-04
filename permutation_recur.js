/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const result = [];
    const path = [];
    const used = new Array(nums.length).fill(false);

    function backtrack() {
        if (path.length === nums.length) {
            result.push([...path]);  // store a copy of the current permutation
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;

            path.push(nums[i]);
            used[i] = true;

            backtrack();  // recurse

            // backtrack step
            path.pop();
            used[i] = false;
        }
    }

    backtrack();
    return result;
};
