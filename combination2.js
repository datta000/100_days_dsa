/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    candidates.sort((a, b) => a - b)
    const result = []
    const backtrack = (index, combi, sum) => {
        if (sum === target) {
            result.push([...combi])
            return
        }
        if (sum > target || index >= candidates.length) return
        for (let i = index; i < candidates.length; i++) {
            if (i > index && candidates[i] === candidates[i - 1]) continue;
            combi.push(candidates[i])
            backtrack(i + 1, combi, sum + candidates[i])
            combi.pop()
        }
    }
    backtrack(0, [], 0)
    return result
};