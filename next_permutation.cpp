class Solution {
    public:
        void nextPermutation(vector<int>& nums) {
            int n = nums.size(), i, j;
    
            // Step 1: Find the first index 'i' from the end such that nums[i] < nums[i+1]
            for (i = n - 2; i >= 0; --i) {
                if (nums[i] < nums[i + 1]) break;
            }
    
            if (i >= 0) {
                // Step 2: Find the index 'j' from the end where nums[j] > nums[i]
                for (j = n - 1; j > i; --j) {
                    if (nums[j] > nums[i]) break;
                }
    
                // Step 3: Swap nums[i] and nums[j]
                swap(nums[i], nums[j]);
            }
    
            // Step 4: Reverse the subarray from i+1 to end
            reverse(nums.begin() + i + 1, nums.end());
        }
    };
    