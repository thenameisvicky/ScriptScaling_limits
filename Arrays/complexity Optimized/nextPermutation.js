//@Description : Find next Permutation of given array (lexicial Order)

var nextPermutation = function (nums) {
  //Nessecary to find the first element which is out pivot
  let i = nums.length - 2;
  //Finding first element
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  //Finding the smallest number after first number but it is greater than the first number
  if (i >= 0) {
    let j = nums.length - 1;
    while (nums[j] < nums[i]) {
      j--;
    }
    //Smallest number after first found and swapping the pair
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  //Reversing the next numbers in array after ith number
  let left = i + 1;
  let right = nums.length - 1;
  while (left - right) {
    //swapping the position to reverse'em
    [nums[left], nums[right]] = [nums[right], nums[left]];
    //moving on to next 2
    left++;
    right--;
  }
  //finally Returning the array
  return nums;
};

console.log("Next Permutation: ", nextPermutation([1, 2, 3, 4, 5]));
