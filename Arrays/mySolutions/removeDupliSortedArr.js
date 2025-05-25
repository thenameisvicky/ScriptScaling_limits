//@Description: Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
//@return: K
//@Pattern: Two-Pointers
var removeDuplicate = function (nums) {
  if (nums.length === 0) return 0;

  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if(nums[i] !== nums[i-1]){
        nums[k] = nums[i];
        k++
    }
  }
  return k;
};

console.log(`Removed Duplicates: `,removeDuplicate([1,2,3,3,4,5,5,6,7,7]));