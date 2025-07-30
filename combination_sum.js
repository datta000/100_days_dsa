/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const result = [];

    function backtrack(start, path, total) {
        if (total === target) {
            result.push([...path]); // found valid combination
            return;
        }

        if (total > target) {
            return; // exceeded target, backtrack
        }

        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]);                // choose
            backtrack(i, path, total + candidates[i]); // explore (not i+1, because reuse is allowed)
            path.pop();                              // un-choose (backtrack)
        }
    }

    backtrack(0, [], 0);
    return result;
};
