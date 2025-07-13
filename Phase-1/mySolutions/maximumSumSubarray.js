//@Description: Given an integer array nums, find the subarray with the largest sum, and return its sum.
//@Pattern: Kdane's Algorithum (sliding window)

var maxSumSubarray = function (nums) {
  //Sarting currentsum from 0 cause we dont know the max sum
  let currentSum = 0;
  //Having max as -Infinity cause currently there is no element left in array to compare
  let max = -Infinity;
  //Iterating through the array
  for (let i = 0; i < nums.length; i++) {
    //Increasing the sum
    currentSum += nums[i];
    //Calculating the Max of max and currentsum
    max = Math.max(max, currentSum);
    if (currentSum < 0) {
      //Edge case if currentsum < 0 then we set it as current sum
      currentSum = 0;
    }
  }
  //Finally returning max
  return max;
};

console.log(`Maximum sum subarray: ${maxSumSubarray([1,2,3,-1,-4,-5,-6,0,9,8,7])}`);