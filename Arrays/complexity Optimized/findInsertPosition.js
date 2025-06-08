//@Description: Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
//@Time Complexity: O(log n)
//@Pattern: Two-Pointers

var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    //Mid is nessesary always in Two pointers
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  //Returning left because it will be the smaller index where element would need to be placed!
  return left;
};

console.log(`Find Insert Position: ${searchInsert([1,3,5,6],5)}`);