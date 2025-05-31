//@Description: Given an integer array nums, find the subarray with the largest sum, and return its sum.
//@Pattern: Kdane's Algorithum (sliding window)

var maxSumSubarray = function (nums) {
  let currentSum = 0;
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    max = Math.max(max, currentSum);
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return max;
};

console.log(`Maximum sum subarray: ${maxSumSubarray([1,2,3,-1,-4,-5,-6,0,9,8,7])}`);