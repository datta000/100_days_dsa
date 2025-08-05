class Solution {
    isSubsetSum(arr, target) {
        function helper(index, target) {
            if (target === 0) return true
            if (index == arr.length) return false
            let take = false
            if (arr[index] <= target) {
                take = helper(index + 1, target - arr[index])
            }

            let nonTake = helper(index + 1, target)
            return take || nonTake
        }
        return helper(0, target);
    }
}