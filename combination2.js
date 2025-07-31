/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    const result = [];
    candidates.sort((a, b) => a - b); // Sorting helps us skip duplicates

    function backtrack(start, path, total) {
        if (total === target) {
            result.push([...path]); // Found valid combination
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            // Skip duplicates at the same level
            if (i > start && candidates[i] === candidates[i - 1]) continue;

            // If total exceeds target, no need to continue
            if (total + candidates[i] > target) break;

            path.push(candidates[i]); // Choose
            backtrack(i + 1, path, total + candidates[i]); // i+1 because each number only once
            path.pop(); // Backtrack
        }
    }

    backtrack(0, [], 0);
    return result;
};
