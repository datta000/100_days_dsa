function nextPermutation(nums) {
    let n = nums.length;
    let i = n - 2;
  
    // Step 1: Find the first decreasing element from the end
    while (i >= 0 && nums[i] >= nums[i + 1]) {
      i--;
    }
  
    if (i >= 0) {
      // Step 2: Find the next greater element to swap with
      let j = n - 1;
      while (j >= 0 && nums[j] <= nums[i]) {
        j--;
      }
      // Step 3: Swap them
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  
    // Step 4: Reverse the suffix
    reverse(nums, i + 1, n - 1);
  }
  
  // Helper function to reverse part of the array in-place
  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  