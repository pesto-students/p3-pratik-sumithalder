var maxSubArray = function(nums) {
    for (let i = 1; i < nums.length; i++) {
      nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    }
    return Math.max(...nums)
};

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log("Max sub array is " + maxSubArray(nums)); // Max sub array is 6


// https://leetcode.com/submissions/detail/760326289/