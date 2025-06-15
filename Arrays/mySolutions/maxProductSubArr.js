//Description: Given an integer array nums, find a subarray that has the largest product, and return the product.
// Pattern: Three Pointers

var maxProduct = function (nums) {
  //Setting up inital values for Pointers
  let maxProduct = nums[0];
  let minProduct = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    //Swap the values (sorting in-place of array)
    if (nums[i] < 0) {
      [maxProduct, minProduct] = [minProduct, maxProduct];
    }
    //Calculating min and max in every loop
    maxProduct = Math.max(nums[i], maxProduct * nums[i]);
    minProduct = Math.min(nums[i], minProduct * nums[i]);
    //Max value will be result cause we need Max Product in a subarray [1,2] => 2 and [3,4] => 12 max is 12
    result = Math.max(maxProduct, result);
  }

  //Returning result!
  return result;
};

console.log(`Maximum Product Subarray: ${maxProduct([2, 3, -2, 4])}`);
