/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const result = []
    const backtrack = (index, combi, sum) => {
        if (sum === target) {
            result.push([...combi])
            return
        }
        if (sum > target || index >= candidates.length) return
        combi.push(candidates[index])
        backtrack(index, combi, sum + candidates[index])
        combi.pop()
        backtrack(index + 1, combi, sum)
    }
    backtrack(0, [], 0)
    return result
};